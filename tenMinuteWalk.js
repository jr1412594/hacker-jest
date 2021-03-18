function isValidWalk(walk) {
    // let count = {};
      let nS = 0
      let wE = 0
    
      for(let i = 0; i < walk.length; i++){
        if(walk[i] === 'n'){
          nS++
        } else if (walk[i] === 's'){
          nS--
        } else if (walk[i] === 'e'){
          wE++
        } else {
          wE--
        }
    
      }
      console.log( nS, wE)
      return nS === 0 && wE === 0 && walk.length === 10? true : false
    }