
function testConst(){

    const a =10;

    if(true){
        const a = 20;
        console.log(a);
    }

    console.log(a);
}

testConst();