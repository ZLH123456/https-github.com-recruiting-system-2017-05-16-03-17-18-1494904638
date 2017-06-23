module.exports = function main(string a) {
  parseInt(a); 
  int b=0;
  while(a>0)
  {
    b+=a/10;
    a=a%10;
    
  };
  return b;
};
