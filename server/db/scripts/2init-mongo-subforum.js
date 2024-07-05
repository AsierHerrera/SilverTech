db = db.getSiblingDB('Desafio');
      
db.createCollection('subforums');

db.subforums.insertMany([
    {   
            _id:ObjectId("6685172b93eca4aa5890548b"),
            title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            user: ObjectId("668580e9d88a7bd288213fc9"),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu quam, sodales id auctor ac, fringilla eget turpis. Proin fringilla, nulla ac gravida ullamcorper, dolor elit elementum urna, et tempus orci orci ut eros. Nulla et mauris arcu. Morbi mattis arcu sed purus cursus lacinia. Nulla mauris velit, facilisis sed risus quis, mattis semper neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consequat cursus sem, sed tincidunt lacus. Phasellus eget molestie elit, id congue neque. Pellentesque sit amet ex eros. Nunc nec semper quam, vel tristique enim. Quisque condimentum placerat suscipit. Pellentesque nec mauris ut diam maximus tincidunt vitae ut nunc. In condimentum suscipit sapien. Vivamus ultrices dui tempus, fermentum leo vitae, ullamcorper urna.…",
            comments:[ObjectId("6686691214a9cc0513b97a2c"), ObjectId("668664c8d4025e73142a2121")],
            createdAt: "2024-07-03T09:17:31.940+00:00",
            updatedAt: "2024-07-03T16:50:37.084+00:00"
    },
        {   
            _id:ObjectId("668560b6d88a7bd288213dc5"),
            title: "Quas molestias excepturi sint occaecati cupiditate non provident", 
            user: "6686ef98f95cfdd376f3bc66",
            text: "Sed mollis mauris a leo auctor elementum. Quisque porttitor enim posuere, dictum massa eget, aliquam felis. Mauris posuere fringilla magna, sit amet rhoncus velit tristique ac. Vivamus id nulla mattis, tristique dui in, lobortis tortor. Duis non cursus ipsum. Nullam tristique magna nulla, sit amet pellentesque mi efficitur a. Mauris tempus lectus ac leo dignissim, sit amet tempus dui maximus. Phasellus elit urna, tincidunt sed fermentum aliquet, pellentesque a libero.…",
            comments: [],
            createdAt: "2024-07-03T09:17:31.940+00:00",
            updatedAt: "2024-07-03T16:50:37.084+00:00"
    },
    {   
        _id:ObjectId("6685654bd88a7bd288213de9"),
        title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
        user: "6686623e227867a3e8543cc4",
        text: "Etiam aliquet fringilla nulla, eu faucibus nisl interdum quis. Aliquam sem nisl, cursus eget finibus eu, elementum at massa. Praesent commodo sem urna, nec lacinia orci faucibus sit amet. Integer augue tellus, iaculis ac ex nec, iaculis elementum nisl. Etiam efficitur tellus nec sem hendrerit, at consectetur orci tincidunt. Curabitur et congue massa. Etiam quis cursus nibh. Ut non ipsum erat. Curabitur consequat mi quis semper lobortis. Aliquam auctor molestie nunc, ut aliquam nulla ultrices a.…",
        comments: [],
        createdAt: "2024-06-03T09:17:31.940+00:00",
        updatedAt: "2024-06-03T16:50:37.084+00:00"
       
},
 
]);