module.exports = function main(string a) {
  parseInt(a); 
  var b=0
  if(a>9)
  {
    b+a/10;
    a=a%10;
    
  }
  return b;
};
