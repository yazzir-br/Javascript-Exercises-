function blocking() {
    console.log(" ka Blocking ku xagan ayuu ka bilabmayaa");
    
    const startTime = Date.now();
    const Dibudhig = 2000;

    while (Date.now() - startTime < Dibudhig) {
    }
    return "Waxa uu soo bixi donaa  2 second kadib ";
}

console.log(blocking());
console.log("message kan waxa uu soo baxayaa ka timerka kadib.");


function nonBlocking() {
    console.log("Non-Blocking Xagan ayuu ka bilaabmayaa ");

    return new Promise(() => {
        setTimeout(() => {
            console.log(" Waxa uu soo baxayaa 2 second kadib");
        }, 2000);
    });
}

nonBlocking().then((message) => {
    console.log(message);
});
console.log("Kani waxa uu so muqanayaa timer ka hor .");
