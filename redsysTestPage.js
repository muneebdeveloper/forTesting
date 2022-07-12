import { useEffect } from "react";
import Script from 'next/script';

const RedsysTestPage = () => {


    useEffect(() => {

        function merchantValidationEjemplo() {
            //Insertar validaciones…
            alert("Esto son validaciones propias");
            return true;
        }


        window.addEventListener("message", function receiveMessage(event) {
            console.log("I am inside the message", event);
            window.storeIdOper(event, "token", "errorCode", merchantValidationEjemplo);
        });



        function pedido() {
            let order = "pedido" + Math.floor((Math.random() * 1000) + 1);
            console.log("merchant order is ", order)
            return order;
        }
        window.setTimeout(() => {
            const resDoc = document.getElementById('card-form');
            console.log("response is ", resDoc);
            window.getInSiteForm('card-form', '', '', '', '', 'Pay', '356748061', '1', pedido(), 'EN', true);
        }, 5000)

    }, [])


    return (
        <div className="mt-[200px]">
        {/* <script src="https://sis-t.redsys.es:25443/sis/NC/sandbox/redsysV2.js"></script> */}
            <Script 
                src="https://sis-t.redsys.es:25443/sis/NC/sandbox/redsysV2.js"
                strategy="beforeInteractive"
            />
            <div id="card-form" />
            <form name="datos">
                <input type="hidden" id="token"></input>
                <input type="hidden" id="errorCode"></input>
                <a href="javascript:alert(document.datos.token.value + '--' + document.datos.errorCode.value)"> ver</a>
            </form>
        </div>
    )
}


export default RedsysTestPage;