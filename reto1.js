
        //-------------- pruebas ---------------
        const giftIds = [2, 1, 3, 5, 3, 2]
        const giftIds2 = [1, 2, 3, 4]
        const giftIds3 = [5, 1, 5, 1]

        let opc1 = findFirstRepeated(giftIds)
        let opc2 = findFirstRepeated(giftIds2)
        let opc3 = findFirstRepeated(giftIds3)

        console.log(opc1)
        console.log(opc2)
        console.log(opc3)
        //--------------------------------------
        function findFirstRepeated(giftIds){
            const dup = array => new Set(array).size < array.length

            if(dup(giftIds)){
                var indices = {};

                for (var i = 0; i < giftIds.length; i++) {
                    var id = giftIds[i];

                    // Si el número ya está en el objeto de índices, significa que es una repetición
                    if (indices[id] !== undefined) {
                        return id;
                    } else {
                        indices[id] = i;
                    }
                }
            }else{
                return -1
            }
        }