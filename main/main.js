module.exports = function main(a) {
  parseInt(a); 
  int b=0;
  while(a>0)
  {
    b=b+a%10;
    a=a/10;
    
  };
  return b;
};
