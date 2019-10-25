// getting tab url
var winloc = location.href;
console.log(winloc);
// variable declaration
var a1,a2,a3,Totalcount,list_items_child2,current_total_li;
var child1,child2,child3,child4,child5,child6;
var person=[];
var name,location,occupation,education,security_question,security_answer;

//parent();


promise1 = new Promise(function(resolve, reject) {

setTimeout(parent,9000);

function parent()  {
    if (winloc == "https://www.facebook.com/groups/2012739888991496/requests/") {

   checkFormId();
//    }else{
//        checkFormCommonClasses();
//        if(a2 == undefined){
//        console.log("checking form internal classes");
//        window.requestAnimationFrame(checkFormCommonClasses);
//        }else{
//            console.log("checking total requests");
//            
//            }
//    }
   
    
}



function checkFormId(){
    a1 = document.getElementById("member_requests_pagelet");
     if(a1== null){
        console.log("checking form id");
         window.requestAnimationFrame(checkFormId);
     }
    else{
        checkFormCommonClasses();
    }
        
}

function checkFormCommonClasses(){
//   console.log(a1.children[0].children[0].children[0].children[0].children[1]);
    //child1
    if(a1.children[0] == undefined){
        
        window.requestAnimationFrame(checkFormCommonClasses);
    }else{
        child1=a1.children[0];
        //child2
        if(a1.children[0].children[0] == undefined){
            window.requestAnimationFrame(checkFormCommonClasses);
        }else{
            child2=a1.children[0].children[0];
            //child3
            if(a1.children[0].children[0].children[0] == undefined){
                window.requestAnimationFrame(checkFormCommonClasses);
            }else{
                child3=a1.children[0].children[0].children[0];
                //child4
                if(a1.children[0].children[0].children[0].children[0] == undefined){
                     window.requestAnimationFrame(checkFormCommonClasses);
                }else{
                    child4=a1.children[0].children[0].children[0].children[0];
                    //child5
                    if(a1.children[0].children[0].children[0].children[0].children[1] == undefined){
                        window.requestAnimationFrame(checkFormCommonClasses);
                    }else{
                        child5=a1.children[0].children[0].children[0].children[0].children[1];
                        //child6
                        if(a1.children[0].children[0].children[0].children[0].children[1].children[0] == undefined){
                              window.requestAnimationFrame(checkFormCommonClasses);

                        }else{
                            child6=a1.children[0].children[0].children[0].children[0].children[1].children[0];
//                            list_items_child1
                            if(a1.children[0].children[0].children[0].children[0].children[1].children[1] == undefined){
                                window.requestAnimationFrame(checkFormCommonClasses);
                            }else{
                                var list_items_child1=a1.children[0].children[0].children[0].children[0].children[1].children[1];
                                // list_items_child2
                                if(a1.children[0].children[0].children[0].children[0].children[1].children[1].children[0] == undefined){
                                    window.requestAnimationFrame(checkFormCommonClasses);
                                }else{
                                    
                                    var list_items_child2=a1.children[0].children[0].children[0].children[0].children[1].children[1].children[0];
                                   
                                      console.log("test1"); 
                                    if(!a1.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[1].children[0].children[0].children[3].children[0].children.length){
                                         window.requestAnimationFrame(checkFormCommonClasses);
                                    }else{
//                                        console.log(a1.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[1].children[0].children[0].children[3].children[0].innerText);
                                      
                                        console.log("list_items_child2",list_items_child2);

                                    current_total_li=list_items_child2.childElementCount;
                                    console.log("current_total_li",current_total_li);
                                    var totalbar =a1.children[0].children[0].children[0].children[0].children[1].children[0].innerText;
                                    var splitbar = totalbar.split(" ");
                                    var Totalcount = splitbar[0];
                                    console.log(Totalcount,current_total_li);

                                    //    for scrolling till the bottom to get all Element in unordered list 
                                    scrollToBottom();
                                    // child5 first item
//                                    listItemsData(Totalcount);
                                    
                    promise2 = new Promise(function(resolve, reject) {                
                                     for(var i=0;i<Totalcount;i++){
                                        console.log("fetching details");

                                    //        checkChilds();

                                        var details = a1.children[0].children[0].children[0].children[0]
                                          .children[1].children[1].children[0].children[i]
                                          .children[0].children[1].children[0].children[0]
                                          .innerText

                                         console.log("details are ",details,"value of i is ",i);
                                         person.push(details);

                                            }
                                        
                                        console.log(person);
//                                        -------------------------
//                                         inserting into api
//                                        var formBody = [];
//                                            for (var property in details) {
//                                              var encodedKey = encodeURIComponent(property);
//                                              var encodedValue = encodeURIComponent(details[property]);
//                                              formBody.push(encodedKey + "=" + encodedValue);
//                                            }
//                                            formBody = formBody.join("&");
//                                            //console.log(formBody);
//
//                                            fetch("http://139.59.92.143:9092/education", {
//                                              method: "POST",
//                                              headers: {
//                                                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
//                                              },
//                                              body: formBody
                                            }).then(function(value){
                                                    console.log(value);        
                                                     //for clearing the chrome storage
                                                    chrome.storage.local.clear(function() {
                                                    var error = chrome.runtime.lastError;
                                                    if (error) {
                                                    console.error(error);
                                                    }
                                                    });
                        
                                                    }).then(function(value){
                        
                        
//                                            ----------------------------------
                                            var count=0;
                                            var Facebook_data= "Facebook_data"+count;
                                            //                                               inserting into local storage
                                            chrome.storage.local.set({ [Facebook_data]: person }, function() {
                                            console.log("data saved");
                                            });
                                            // retrieving from local storage

                                            // ------------------------------------
                                                    });
//                                            ------------------------------
                                        
                                       
                                        
//                                       
//                                        
//                                         chrome.storage.local.get(Facebook_data, function(data) {
//                                             console.info(data);
//      
//                                           });
                                        
                                        
                                        resolve("done!");
//                                        ------------------------------------------
        
                                        }
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
//    
//    console.log(child1);
//    child2=CheckIfUndefined(a1.children[0].children[0]);
//    console.log(child2);
//    child3=CheckIfUndefined(a1.children[0].children[0].children[0]);
//    console.log(child3);
//    child4=CheckIfUndefined(a1.children[0].children[0].children[0].children[0]);
//    console.log("child 4",child4);
//    child5=CheckIfUndefined(a1.children[0].children[0].children[0].children[0].children[1]);
//    console.log("child5 ",child5);
       //getting total number of request
//    child6=CheckIfUndefined(a1.children[0].children[0].children[0].children[0].children[1].children[0]);
    
//    for getting the total items in the unordered list


}
//  
//function CheckIfUndefined(value){
//        if(value == undefined){
//            console.log("checking for next classes"+value);
//        window.requestAnimationFrame(checkFormCommonClasses);
//        }else{
//            console.log("total item reached");
//            return value;
//        }
//    }
    
    
function scrollToBottom(){
//    a1.children[0].children[0].children[0].children[0]
//                          .children[1].children[1].children[0]
    var count=0;
   if(current_total_li<Totalcount){
       window.scrollTo(0, 300);
      window.requestAnimationFrame(scrollToBottom);
      }
    
    }
//    
//function listItemsData(Totalcount){
//     var userframe = child5.children[1];
//    console.log("userframe ",userframe);
//    console.log(Totalcount);
//  
//    
//}
    
//function checkChilds(){
//    var children1=getChild(a1.children[0]);
//    var children2=getChild(a1.children[0].children[0]);
//    var children3=getChild(a1.children[0].children[0].children[0]);
//    var children4=getChild(a1.children[0].children[0].children[0].children[0]);
//    var children5=getChild(a1.children[0].children[0].children[0].children[0].children[1]);
//    var children6=getChild(a1.children[0].children[0].children[0].children[0].children[1].children[1]);
//    var children7=getChild(a1.children[0].children[0].children[0].children[0].children[1].children[1].children[0]);
//    var children8=getChild(a1.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[i]);
//    var children9=getChild(a1.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[i]
//            .children[0]);
//    var children10=getChild(a1.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[i]
//            .children[0].children[1]);
//    var children11=getChild(a1.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[i]
//            .children[0].children[1].children[0]);
//    var children12=getChild(a1.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[i]
//            .children[0].children[1].children[0].children[0]);
//    
//}
//
//function getChild(value){
//        if(value == undefined){
//        console.log("checking for next child"+value);
//        window.requestAnimationFrame(checkChilds);
//        }else{
//        console.log("total child reached");
//        return value;
//        }
}    

   }).then(function(value){
             console.log(value);        
            chrome.runtime.sendMessage({greeting: "ok"}, function(response) {
            console.log(response.farewell);
        });
                     });