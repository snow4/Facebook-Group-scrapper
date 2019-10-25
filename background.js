//import axios from 'axios';
console.log("background script", axios);
document.createElement("head");
var persons = [];
var admin_email;
var details;

function makeRequest(type, url, data) {
  const getToken = () =>
    new Promise((res, rej) => {
      chrome.storage.local.get(function(data) {
        console.log(data.token);
        res(data.token);
      });
    });
  return getToken().then(token =>
    axios({
      method: type,
      url: "https://fb-chrome-app.herokuapp.com/api" + url,
      data: data,
      headers: { "x-access-token": token }
    })
  );
}

function fetchMail() {
  chrome.storage.local.get(function(fdata) {
    Groupname = fdata.group_name;
    admin_email = fdata.email;
    console.log(Groupname);
    console.log(admin_email);
    return admin_email;
  });
}

function fetchGname() {
  chrome.storage.local.get(function(fdata) {
    var Groupname = fdata.group_name;
    admin_email = fdata.email;
    console.log(Groupname);
    console.log(admin_email);
    return Groupname;
  });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting == "ok") {
    console.log("background script ejected");
    chrome.storage.local.get(function(data) {
      var fid = sender.tab.url.split("/");
      var id = fid[4];
      console.log(id);

      var Facebook_data = id;
      console.log(Facebook_data);
      console.log(data);
      console.log(data[id]);

      var GroupName,
        GroupUrl,
        Name,
        Email,
        Phone,
        FabUrl,
        LocationFrom,
        Education,
        JobTitle,
        JoinedOn,
        CompanyName,
        Answers;

      var Groupname = data.group_name;
      admin_email = data.email;
      console.log(Groupname);
      console.log(data.email);
      // return Groupname;
      //                 -------------------
      console.log(data.urls[0]);

      for (var i = 0; i < data[id].length; i++) {
        var person = data[id][i];
        console.log(person);
        var sepration = person.split("\n");

        // GroupName=Groupname;
        // Email:admin_email;
        GroupUrl = sender.tab.url;
        Name = sepration[2]; //2
        console.log("name", Name);
        LocationFrom = sepration[7]; //7
        console.log("LocationFrom", LocationFrom);
        Education = sepration[9];
        console.log("Education", Education);
        JobTitle = sepration[8];
        console.log("JobTitle", JobTitle);
        JoinedOn = sepration[3];
        console.log("JoinedOn", JoinedOn);
        //                     CompanyName=
        Answers = sepration[12];

        //                     -----------------

        var users = {
          name: Name,

          phone: "",
          fbUrl: data.urls[i],
          locationFrom: LocationFrom,
          education: Education,
          jobTitle: JobTitle,
          joinedOn: JoinedOn,
          companyName: "",
          answers: [
            {
              Answers
            }
          ]
        };
        persons.push(users);
      }

      var details = {
        groupName: Groupname,
        groupUrl: GroupUrl,
        email: admin_email,
        users: persons
      };

      console.log(details);

      //-------------------------
      //                                         inserting into api

      var fbtoken;

      chrome.storage.local.get(function(data) {
        console.log(data);

        makeRequest("post", "/record/" + id, details)
          .then(console.log)
          .catch(console.log);
      });
    });
  }
  sendResponse({ farewell: "goodbye" });
});
