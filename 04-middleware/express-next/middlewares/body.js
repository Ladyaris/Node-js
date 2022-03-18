// buat fungsi cek kalo objec nya kosong
function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
}

module.exports = (req,res,next) => {
    // kalo object request body nya kosong, brati skip middleware
    if (isEmpty(req.body)) next('route');

    // kalo object request body ada request nya, tampilkan body request nya
    console.log("Body: ", req.body);
    next();
};
