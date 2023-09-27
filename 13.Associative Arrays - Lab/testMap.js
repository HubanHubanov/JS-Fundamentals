function test() {

    let result = new Map()

   result.set("Ben", 39)
result.set("Peter", 30)
result.set(5, 2)
result.set("6", 2)
result.delete("Peter")
result.set("Ben", result.get("Ben") + 1)


console.log(result);

if(result.has("6")) {
    console.log("yessss");
} 
 if (!result.has("Pet")) {
    console.log("nooooo");
}


}
test()