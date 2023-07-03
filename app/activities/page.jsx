import React from 'react'
import Abouthero from '../components/abouthero'
import Activity from '../components/activity'


const Activities = () => {
  return (
    <>
    <Abouthero title="All The Activities In The Gulf Club"/>
    <div className='flex flex-col gap-8 bg-white py-24 sm:py-32'>
    <Activity image="/golf.jpg" alt="golf" title="Golf" description="The golf club of Lebanon is dedicated to provide its members and guests with a world class of golf course. Situated on a magnificent sun-bathed area of 660,500 square meters, the GCL has a stunning 18 holes golf course, rolling across perfectly manicured fairways. These naturally sculpted fairways, as well as tricky greens, combine to make the golf course one of the best and truest tests of golf anywhere in the region. Significant investment has been made to improve the course over the last few years, culminating in the hosting of many regional tournaments."/>
    <Activity image="/tenniss.jpg" alt="tennis" title="Tennis" description="The GCL prides itself on offering to its members the most modern and fully equipped Tennis courts in Lebanon, with 7 courts, (5 clay and 2 hard), which have hosted several competitions, including the Davis Cup and International Tennis Federation(ITF) tournaments. The courts are well lighted and available for reservation whenever you feel like practicing this sport in a friendly and natural environment."/>
    <Activity image="/football.jpg" alt="football" title="Mini Football" description="A mini football court has been constructed to let your children enjoy this popular sport inside their club, make new friends and develop a team spirit. Famous coaches will take care of your kids to improve their performance and discover their talents."/>
    <Activity image="/squash.jpg" alt="squash" title="Squash" description="A state of the art renovated squash court has been recently established to enable the fittest of you to practice this energetic Sport. For reservation contact the administration"/>
    <Activity image="/biliar.jpg" alt="biliard" title="Snooker" description="Located in the Old Club House, we have 3 professional snooker tables where players can enjoy cracking balls into the pockets, in addition to 1 carambole billiard table. Spectators can relax in big comfortable chairs to watch a game."/>
    <Activity image="/pool.jpg" alt="pool" title="Pool Area" description="Escape the congestion and bustling of the city and enjoy, alone or with your family and guests, a relaxing day at our aquatic center equipped, with a six-lane swimming pool, a diving tank, a junior pool and lavish sun tanning gardens."/>
    <Activity image="/gymclub.jpg" alt="gym" title="Fitness Center" description="Our new fitness center has a variety of free weights, exercise bicycles, treadmills, weight circuit stations and specialized exercise equipment for golfers. An aerobics room offers a variety of classes such as dance, low impact aerobics, toning, yoga and others. Martial arts classes are also given. Personal trainers are available to help members with their fitness program. The fitness center is located above the Pool Restaurant"/>
    <Activity image="/playground.jpg" alt="playground" title="Playground" description="Located in a fairy tale pinewood, the GCL playground is the safest and place for your children to spend their energy and enjoy themselves in a healthy and natural place. From slides and swings, to see-saws and much more, the famous playground welcomes your little ones during hot summer days and sunny winter time."/>
    </div>
    </>
  )
}

export default Activities