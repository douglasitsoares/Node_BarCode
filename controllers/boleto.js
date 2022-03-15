const Boleto = require("../models/boleto");

exports.boletoFindId = (req, res, next) => {
    var barCodeNum = req.params.id;  
    var numBarCode = 0; 

    if(Number.isNaN(Number(barCodeNum))){
        res.status(404).json({ message: "Invalid character on this boleto request, please check the number and try again!" });
        
    } else {
        numBarCode = barCodeNum.length; 
        
        switch (numBarCode) {
            case 44:
               const boleto44 = {barCode: barCodeNum, 
                    amount: barCodeNum.substring(9,18),
                    expirationDate: barCodeNum.substring(5,8)};
                res.status(200).json(boleto44);  
              break;
            case 47:
                const boleto47 = {barCode: barCodeNum, 
                    amount: barCodeNum.substring(9,18),
                    expirationDate: barCodeNum.substring(5,8)}                
                res.status(200).json(boleto47);  
                break;
            case 48:
                res.status(200).json(barCodeNum + " - " + numBarCode);  
              break;
            default:
                res.status(400).json({ message: "Error on quantity of number, invalid boleto! " + numBarCode });
          }       
    }
    
}
