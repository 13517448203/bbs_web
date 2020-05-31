export function formatPostStatus(num) {
  let statusStr ='';
  if(num ===1){
    statusStr = '分享'
  }else if(num === 2){
    statusStr = '提问'
  }else if(num === 3){
    statusStr = '讨论'
  }else if(num === 4){
    statusStr = '建议'
  }
  return statusStr;
};