function objectInfo() {
 return arguments.length;
}
typeof objectInfo; // function
objectInfo(3,4,5); // 3
objectInfo.toString(); // function objectInfo() { return arguments.length; }