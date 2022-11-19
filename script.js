 const hero = document.querySelector(".hero");
 const text = document.querySelector("h1");
 const walk = 100; //100px

 function shadow (e){

    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    // js dectructuring write te above code in one line be like
    const { offsetWidth: width, offsetHeight: height} = hero;

    // console.log (this, e.target)
    let {offsetX: x, offsetY: y} = e;
    // console.log(x, y)

    if (this !== e.target){
        x=x+e.target.offsetLeft;
        y=y+e.target.offsetTop;
    }
    // console.log(x, y)

    const xWalk = (x / width * walk) - (walk/2);
    const yWalk = (y / height * walk) - (walk/2);


 }
 hero.addEventListener("mousemove", shadow )