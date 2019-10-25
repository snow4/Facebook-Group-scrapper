// getting tab url
var winloc = location.href;
console.log(winloc);
// variable declaration
var a1,a2,a3,Totalcount,list_items_child2,current_total_li;
var child1,child2,child3,child4,child5,child6;
var person=[];
var name,location,occupation,education,security_question,security_answer;
var group_name;
//parent();


promise1 = new Promise(function(resolve, reject) {

setTimeout(parent,9000);

function parent()  {
    if (winloc == "https://www.facebook.com/groups/2012739888991496/requests/") {

   checkFormId();
    
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
    
//function doJob () { 
//
//    for(var i=0;i<Totalcount;i++){
//                                        console.log("fetching details");
//
//                                    //        checkChilds();
//
//                                        var details = a1.children[0].children[0].children[0].children[0]
//                                          .children[1].children[1].children[0].children[i]
//                                          .children[0].children[1].children[0].children[0]
//                                          .innerText
//
//                                         console.log("details are ",details,"value of i is ",i);
//                                         person.push(details);
//
//                                            }
//                                        
//                                        console.log(person);      
//                                                     //for clearing the chrome storage
//    
//    
//                
//                                                    chrome.storage.local.clear(function() {
//                                                    var error = chrome.runtime.lastError;
//                                                    if (error) {
//                                                    console.error(error);
//                                                    } else {
//                                                         var count=0;
//                                                        var Facebook_data= "Facebook_data"+count;
//                                            //                                               inserting into local storage
//                                            chrome.storage.local.set({ [Facebook_data]: person }, function() {
//                                            console.log("data saved");
//                                            })
//                                                    }
//                                                    });
//                    
//                        
////                                            ----------------------------------
//                                           
//    
//    
//}

function checkFormCommonClasses(){
//   console.log(a1.children[0].children[0].children[0].children[0].children[1]);
    //child1
    if(a1.children[0] == undefined){
        
        window.requestAnimationFrame(checkFormCommonClasses);
    }else{
        const users = document.querySelectorAll('li[data-testid]');
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
                                    
                                  
                                     for(var i=0;i<Totalcount;i++){
                                        console.log("fetching details");

                                    //        checkChilds();

                                        var details = a1.children[0].children[0].children[0].children[0]
                                          .children[1].children[1].children[0].children[i]
                                          .children[0].children[1].children[0].children[0]
                                          .innerText;
                                         


                                         console.log("details are ",details,"value of i is ",i);
                                         person.push(details);

                                            }
                                         var fid=winloc.split('/');
                                        var id=fid[4];
                                         console.log(id);
                                            var count=0;
                                        var Facebook_data= id;
                                        console.log(person);
                                        
        
                                                     //for clearing the chrome storage
                                                    chrome.storage.local.remove([Facebook_data],function() {
                                                    var error = chrome.runtime.lastError;
                                                    if (error) {
                                                    console.error(error);
                                                    }
                                                    });
                      
                        
//                                            ----------------------------------
                                        
                                       
                                      mainContainer  =document.getElementById('mainContainer').innerText; 
                                       var name=mainContainer.split('\n');
                                       group_name=name[0];
                                      console.log(group_name);
                                       
                                            //                                               inserting into local storage
                                            chrome.storage.local.set({ [Facebook_data]: person }, function() {
                                            console.log("data saved");
                                            });
                                            chrome.storage.local.set({ "group_name": group_name }, function() {
                                                console.log("group name saved");
                                                });

//                                            ------------------------------
                                        
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


}

    
    
function scrollToBottom(){
//    a1.children[0].children[0].children[0].children[0]
//                          .children[1].children[1].children[0]
    var count=0;
   if(current_total_li<Totalcount){
       window.scrollTo(0, 300);
      window.requestAnimationFrame(scrollToBottom);
      }
    
    }

    

}    

   }).then(function(value){
             console.log(value);        
            chrome.runtime.sendMessage({greeting: "ok"}, function(response) {
            console.log(response.farewell);
        });
                     });