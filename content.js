var winloc = location.href;
console.log(winloc);

//variable declaration
// pure functions

var totalReqCount;
var totalReqString, totalReqCount, x;
var proDetails = [],
  procsvDetails = [],
  quesList = [],
  proLinks = [];

const regex = /^https:\/\/www.facebook.com\/groups\/[a-zA-z0-9]{5,18}\/requests/;

chrome.storage.local.get(function(data) {
  console.log(data);
  if (data.token != null) {
    promise1 = new Promise(function(resolve, reject) {
      parent();
      function parent() {
        if (regex.test(winloc)) {
          // if (
          //   winloc == "https://www.facebook.com/groups/2012739888991496/requests/"
          // )
          MainFunction();
        }
      }

      function MainFunction() {
        (function checkReq() {
          console.log(document.getElementById("member_requests_pagelet"));
          if (document.getElementById("member_requests_pagelet") == undefined) {
            setTimeout(() => checkReq(), 1000);
          } else {
            console.log("in else part");
            x = document.getElementById("member_requests_pagelet");
            if (x.querySelectorAll("div[direction]").length == 0) {
              setTimeout(() => checkReq(), 1000);
            } else {
              console.log(x.querySelectorAll("div[direction]"));
              totalReqString = x.querySelectorAll("div[direction]")[0]
                .innerText;
              console.log(totalReqString);
              var countSplit = totalReqString.split(" ");
              totalReqCount = countSplit[0];
              console.log("totalReqCount", totalReqCount);
              findnext();
            }
          }
        })();

        function findnext() {
          console.log(x.querySelectorAll("div[direction]"));
          if (x.querySelectorAll("div[direction]") == undefined) {
            setTimeout(() => findnext(), 1000);
          } else {
            checkItems();
          }
        }

        function checkItems() {
          console.log(
            "total items in the list now ",
            x.querySelectorAll("div[direction]").length
          );
          if (x.querySelectorAll("div[direction]").length < totalReqCount) {
            //scrolling
            window.scrollTo(0, window.scrollY + 3000);
            console.log("scrolling further");
            setTimeout(() => checkItems(), 2000);
          } else {
            console.log(
              "after scrolling total items in the list now ",
              x.querySelectorAll("div[direction]").length
            );
            nextprev();
          }
        }
        var count = 1;
        var newcount = 0;
        var qcount = 1;
        var y, ques;
        function nextprev() {
          if (x.querySelectorAll("div[direction]")[count] == undefined) {
            setTimeout(() => nextprev(), 2000);
          } else {
            console.log("member 1");
            y = x.querySelectorAll("div[direction]")[count];
            // ques = x.querySelectorAll("div[direction]")[count];

            if (y.querySelectorAll("ul")[0] == undefined) {
              setTimeout(() => nextprev(), 2000);
            } else {
              console.log("member 2");

              if (
                document.querySelectorAll("li[data-testid]")[newcount] ==
                undefined
              ) {
                setTimeout(() => nextprev(), 2000);
              } else {
                console.log("member 3");

                // checking if the id is disabled
                console.log(
                  "is element disabled ",
                  document
                    .querySelectorAll("li[data-testid]")
                    [newcount].querySelectorAll("a"),
                  "new count",
                  newcount
                );

                if (
                  document
                    .querySelectorAll("li[data-testid]")
                    [newcount].querySelectorAll("a")[2] == undefined
                ) {
                  // /------------
                  console.log("element disabled");

                  console.log("member 5");
                  var z = x.querySelectorAll("div[direction]")[count].innerText;
                  //  to get question and answers
                  if (y.querySelectorAll("ul")[3] == undefined) {
                    quesList.push("not yet answered");
                  } else {
                    console.log(y.querySelectorAll("ul")[3]);
                    var quesul = y.querySelectorAll("ul")[3].innerText;
                    quesList.push(quesul);
                    console.log("innerlist", quesul);
                  }

                  // console.log(z);
                  // var link = document
                  //   .querySelectorAll("li[data-testid]")
                  //   [newcount].querySelectorAll("a")[2].href;
                  proDetails.push(z);
                  proLinks.push("not defined");
                  count++;
                  newcount++;
                  if (newcount < totalReqCount) {
                    console.log("=====================");

                    nextprev();
                  } else {
                    console.log("in else");
                    //nextprev();
                    console.log(proDetails, " \n", proLinks, "\n", quesList);

                    var UserDetails = csvformat(proDetails);
                    storingData(UserDetails);
                  }
                } else {
                  //else condition

                  console.log("true not disabled");
                  console.log(
                    newcount,
                    " ",
                    document
                      .querySelectorAll("li[data-testid]")
                      [newcount].querySelectorAll("a")[2]
                  );
                  // if element is not disabled
                  if (
                    document
                      .querySelectorAll("li[data-testid]")
                      [newcount].querySelectorAll("a")[2] == undefined
                  ) {
                    console.log("loop 4");
                    setTimeout(() => nextprev(), 2000);
                  } else {
                    // console.log("member 4");

                    // console.log(y.querySelectorAll("ul")[0].innerText);

                    console.log("member 6");
                    var z = x.querySelectorAll("div[direction]")[count]
                      .innerText;
                    //  to get question and answers
                    if (y.querySelectorAll("ul")[3] == undefined) {
                      quesList.push("not yet answered");
                    } else {
                      console.log(y.querySelectorAll("ul")[3]);
                      var quesul = y.querySelectorAll("ul")[3].innerText;
                      quesList.push(quesul);
                      console.log("innerlist", quesul);
                    }

                    // console.log(z);
                    var link = document
                      .querySelectorAll("li[data-testid]")
                      [newcount].querySelectorAll("a")[2].href;
                    proDetails.push(z);
                    proLinks.push(link);
                    count++;
                    newcount++;
                    if (newcount < totalReqCount) {
                      console.log("=====================");

                      nextprev();
                    } else {
                      console.log("in else");
                      //nextprev();
                      console.log(proDetails, " \n", proLinks, "\n", quesList);

                      var UserDetails = csvformat(proDetails);
                      storingData(UserDetails);
                    }
                  }
                }
              }
            }
          }
        }
      }

      function csvformat(proDetails) {
        for (var i = 0; i < proDetails.length; i++) {
          var dataString = proDetails[i];
          var remo = dataString.split("actions\n");
          var a = remo[1].replace(/\n/g, ",");
          // var a = dataString[i].split("/\n").join(",");

          procsvDetails.push(a);
        }
        console.log(procsvDetails);
        return procsvDetails;
      }

      function storingData(proDetails) {
        var fid = winloc.split("/");
        var id = fid[4];
        var Facebook_data = id;
        var furl = Facebook_data + " url";
        var fques = Facebook_data + " ques";
        console.log(furl);
        console.log("group name or id is : ", id);

        //for removing particular the chrome storage
        chrome.storage.local.remove([Facebook_data], function() {
          var error = chrome.runtime.lastError;
          if (error) {
            console.error(error);
          }
        });

        //inserting into local storage
        chrome.storage.local.set({ [Facebook_data]: proDetails }, function() {
          console.log("profile details saved");
        });

        // profile url list
        chrome.storage.local.set({ [furl]: proLinks }, function() {
          console.log("url details saved");
        });
        // question list
        chrome.storage.local.set({ [fques]: quesList }, function() {
          console.log("url details saved");
        });
        resolve("done!");
        // dateSeperation(proDetails);
      }

      //    ==========================
    }).then(function(value) {
      console.log(value);
      chrome.runtime.sendMessage({ greeting: "ok" }, function(response) {
        console.log(response.farewell);
      });
    });
  }
});
