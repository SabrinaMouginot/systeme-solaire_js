const planets = document.querySelectorAll('.planet')
const p_radii = [22,33,50,70,112,138,165,190]
let p_radians = new Array(8).fill(0)
const p_velocities = [1.607,1.174,1,0.802,0.434,0.323,0.228,0.182]
//il y a 8 planètes autour du soleil donc 8 vitesses et 8 angles.

setInterval(()=>{
    planets.forEach((planet,index)=>{
        planet.style.left=`${Math.cos(p_radians[index])*p_radii[index]}vmin`
        planet.style.top=`${Math.sin(p_radians[index])*p_radii[index]}vmin`
        p_radians[index] += p_velocities[index]*0.02
    })
},1000/60)