const helpers = {};
helpers.randonNumber = ()=>{
    const posible =  'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789';
    let randonNumber = 0;
    for (let i=0; i < 12; i++) {
        randonNumber += posible.charAt(
            Math.floor(Math.random() * posible.length)
        );
    }
    return randonNumber;
};
 module.exports = helpers;