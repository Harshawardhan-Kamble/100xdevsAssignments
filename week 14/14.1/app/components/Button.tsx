"use client"
const Button=()=>{
    return (
        <button onClick={function(){
            alert("Hello you have clicked me I was sleeping")
        }}
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
    )
}
export default Button