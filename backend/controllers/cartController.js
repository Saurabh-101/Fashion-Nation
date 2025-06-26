import userModel from "../models/userModel.js";


// Add products to userCart
const addToCart = async(req,res)=>{

    try {
        
        const {userId, itemId, size} = req.body;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] ={}
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, {cartData});

        res.json({
            success:true,
            msg:"Added to cart."
        })

    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            msg:error.message
        })
        
    }
    
}

// update userCart
const updateCart = async(req,res) =>{


}

// get userCart Data
const getUserCart = async(req,res)=>{



}

export {addToCart, updateCart, getUserCart}
