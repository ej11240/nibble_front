import React from 'react'
import './UserReq.css'
export default function ({num,user}) {
    var sampleUserName = "Panda Kim"
    var sampleUserMail = "UNID_team4_nibble@gmail.com"
    var LatestComment1 = "best teammate ever!! nibble!!!!"
    var LatestComment2 = "I like Panda I like Panda I like Panda I like Panda"
    var LatestComment3 = "FreeRider!"
    var ImageUrl = 'https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating.jpg'
    var sampleParticipation = 3.07;
    var pageOwner = "My Page"
    if(user==2)
    {  
        sampleUserName = "myungjin Oh"
        sampleUserMail = "MyungjinMyungjin@gmail.com"
        LatestComment1= "너무 잘생겨서 눈을 못마주쳤어요. 팀플하기 힘드네요 ㅜㅜ"
        LatestComment2= "같이 팀플해서 너무 좋았어요. 다음에도 같이하고 싶어요."
        LatestComment3= "너무 자기중심적이에요;;;"
        ImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png'
        sampleParticipation = 1.97
    }
    if(user!=1) pageOwner = sampleUserName+ "'s page";
    switch(num)
    {
        case 'ChangeVal':
            return(
                LatestComment3 = LatestComment2,
                LatestComment2 = LatestComment1,
                LatestComment1=user);
        case 'UserInfo':
        return( <div>
            <img className = "UserImg" src={ImageUrl} />
            <box className='UserName'>{sampleUserName}</box>
            <box className='UserMail'>{sampleUserMail}</box>
            </div>); 

        case 'Participation':
        return( <div>
            <box className='Participation'>participation</box>
            <box className='UserParticipation'>{sampleParticipation}</box>
            </div>);

        case 'Frame': 
        return( <div>
            <box className='Frame'></box> 
            <box className='t1'>{pageOwner}</box>
            <box className='t2'>Latest Comments</box>
            <box className='Frame2'></box>
            </div>);

        case 'Comment' : 
        return( <div>
                <box className= 'Comment1'>{LatestComment1}</box>
                <box className= 'Comment2'>{LatestComment2}</box>
                <box className= 'Comment3'>{LatestComment3}</box>
                </div>);
    }
}