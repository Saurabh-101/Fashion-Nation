
// Route for user login
const loginUser = async (req, res) => {

    res.json({
        msg:"Login API working"
    })

}

// Route for user register user
const registerUser = async (req, res) => {

    res.json({
        msg:"Register API working"
    })

}

// Admin login route
const adminLogin = async(req, res) => {

}

export {loginUser, registerUser, adminLogin} 
