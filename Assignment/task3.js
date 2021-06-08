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
  ]
  let d = 2;
  let b = [];
  
  for (let x of a) {
    if (x.parentId >= d) {
      b.push(x.id);
    }
  }
  
  console.log(b);
