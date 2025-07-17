const map = new Map();

map.set('PAK', "Pakistan")
map.set('UAE', "Arabia")
map.set('UK', "Londan")

// for (const key of map) {
//     console.log(key)
// }
// to destructure the above
for (const [key, value] of map) {
    // console.log(key, " => ", value)
}

// iterate the map on (for in loop)

map.set('pkr', "Pakistan")
map.set('riyal', "Arabia")
map.set('dolar', "Londan")

for (const key in map) {
    console.log(key); 
} // but it not working on for in loop