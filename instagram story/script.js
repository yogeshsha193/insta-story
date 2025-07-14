var arr = [
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww"
    },
        {dp:"https://images.unsplash.com/photo-1664625328949-8ef6ab8a57c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmclMjBvbGR8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1560953642-21a40a43a805?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmclMjBvbGR8ZW58MHx8MHx8fDA%3D"
    },    {dp:"https://images.unsplash.com/photo-1741862470289-33d8395c0ffc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5nJTIwb2xkfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1692709892131-4e4e61a644af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1aWxkaW5nJTIwb2xkfGVufDB8fDB8fHww"
    },    {dp:"https://media.istockphoto.com/id/1141793546/photo/exterior-view-of-old-apartment-buildings-in-the-soho-neighborhood-of-manhattan-in-new-york.webp?a=1&b=1&s=612x612&w=0&k=20&c=HFykSn0zC8hp9OZLqLb7qfbBAsOhUpIbOoWFG6ij0_A=",
        story:"https://plus.unsplash.com/premium_photo-1661887310029-ad7e613ec2ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmclMjBvbGR8ZW58MHx8MHx8fDA%3D"
    },
]
var storiyan = document.querySelector("#storiyan")        

var clutter = ""
arr.forEach(function(elem,idex){
    clutter +=`<div class="story">
    <img  id="${idex}"src="${elem.dp}" alt="">
    </div>`;
}); 

storiyan.innerHTML = clutter;   

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"    
    document.querySelector("#full-screen").style.
    backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },4000)        
});  

 