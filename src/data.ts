import { Food } from "./app/models/food";

export const sampleFoods:Food[] = [

  {
    id:'1',
    name:'falafel',
    price:9,
    cookTime:'40-50',
    favorite:true,
    stars:4.0,
    imageUrl:'assets/img/falafel.jpg',
    origins:['lebanon','Syria'],
    tag:['healthy,Vegatarian']
  },


  {
    id:'2',
    name:'foul',
    price:7,
    cookTime:'20-30',
    favorite:false,
    stars:2.5,
    imageUrl:'assets/img/foul.jpeg',
    origins:['lebanon','Syria','Egypt'],
    tag:['healthy,Vegatarian,sheap']
  },

]
