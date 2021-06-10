const a = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 2 },
    { id: 6, parentId: 2 },
    { id: 7, parentId: 5 },
    { id: 8, parentId: 5 },
    { id: 9, parentId: 5 },
    { id: 10, parentId: 5 },
   ];
   // function to get all parent id's
   function Parent(data) {
   const g = [...new Set(data.map((x) => x.parentId))];
   return g.splice(1);                 //output :[1,2,5]
   }
   
   // get first children of parent id
   function Children(parentId, data) {
   const o = [];
   for (let b = 0; b < data.length; b++) {
   if (data[b].parentId === parentId) {
    o.push(data[b].id);
    }
    }
   return o;                           // output:[2,3]
   }
   // get All children of parentId
   function AllChildren(parentId, data) {
   const parent = Parent(data);
   let get = Children(parentId, data);
   for (let i = 0; i < get.length; i++) {
   if (parent.includes(get[i])) {
   const newOutput = Children(get[i], data);
    get = get.concat(newOutput);
    }
    }
   return get;                         //output: [4,5,6,7,8,9.10]
   }
   console.log(AllChildren(2,a))
