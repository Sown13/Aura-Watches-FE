import { useEffect } from "react";
import "../../../css/layout/pages/policies/PolSecurity.css";

export default function PolSecurity() {
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="pol-security text-light">
            <h1>Warranty Policy</h1>

            <h2>WARRANTY* FOR WATCHES;</h2>
            <p>Our goal is to provide the best service with the best possible pricing. Since Royalwrist.pk does not follow the manufacturer’s
                suggested retail prices (MSRP) guide, we are not authorized to provide a manufacturer’s warranty. We understand that having a warranty is a major concern when purchasing a watch, therefore Royalwrist.pk provides its one (1) year warranty to replace the manufacturer’s warranty on all our watches</p>
            <p>We understand that having a warranty is a major concern when purchasing a watch, therefore Royalwrist.pk provides its one (1) year warranty to replace the manufacturer’s warranty on all our watches.</p>

            <h2>PRODUCT WARRANTY</h2>
            <p>Warranty Terms & conditions</p>
            <p>ONE (1) YEAR WARRANTY<br/>Your watch is warranted by Royal Wrist for a period of one (1) year from the original date of purchase under the terms and conditions of this warranty. The Royal Wrist warranty covers materials and manufacturing defects. A copy of the receipt and complete warranty card with dealer stamp is required for proof of purchase</p>
            <p>During the warranty period the watch movement, hands and dial are the only components covered under this warranty. A covered component will be repaired free of repair charges, if it proves to be defective in material or workmanship under normal use</p>
            <p>Our warranty does not cover “external damage” to the product.</p>
            <p>THIS WARRANTY DOES NOT COVER</p>
            <ul>
                <li><b>Any defects in materials and workmanship of battery, case, crystal, strap or bracelet.</b></li>
                <li><b>Damage resulting from improper handling, lack of care, accidents, or normal wearand tear, water/moisture.</b></li>
            </ul>
            <p>This warranty is void if the watch has been damaged by accident, negligence of persons other than authorized Royal Wrist sales or services agents, unauthorized service, or other factors not due to defects in materials or workmanship.</p>
            <p>The Royalwrist.com warranty does not cover any damage resulting from, water/moisture damage. Additionally, the warranty does not cover any damage to the watch case, crystal/glass, watch bracelet/band, watch bezel, straps, screws, crown/stem, finishes, clasps/buckles, or any other physical damage to the watch. Damage which occurs due to having the watch serviced by a third party, nulls and voids the warranty from Royalwrist.pk</p>
            <p>This limited warranty does not cover any damage if there is evidence of excessive wear and tear, or if used under conditions which exceed the watch manufacturer’s water resistance guidelines. Consequential and incidental damages are not recoverable under this warranty or any implied warranties.</p>
            <ul>
                <li><b>External wear-and-tear from normal daily use.</b></li>
                <li><b>External damage to the product. Any damages resulting from wear to the watch case, crystal/glass, watch bracelet, watch bezel, straps, screws, crown/stem, finishes, clasps/buckles, or any other physical damage to the watch.</b></li>
                <li><b>Defects caused by outside force, improper use, or ANY such incidental damages which occur by dropping or banging the timepiece.</b></li>
                <li><b>Any lost/missing stones or gems on the outer portion of the watch or watch face.</b></li>
                <li><b>Outside modifications and third party repair attempts void the warranty.</b></li>
                <li><b>Any damage if used under conditions which exceed the watch manufacturer’s water resistance guidelines.</b></li>
                <li><b>Watches that are labelled as water resistant featuring a screw down crown. The crown must be screwed down properly at all times to keep the watch casing from receiving water damage inside the stem. Water damage is not covered under warranty by Aura Watches</b></li>

            </ul>
            <p>The foregoing warranties and remedies are exclusive and in lieu of all other warranties, terms or conditions, express, implied or statutory, as to any matter whatsoever, including, without limitation, warranties of merchantability, fitness for a particular purpose, accuracy, satisfactory quality, title, and non-infringement, all of which are expressly disclaimed by Royal Wrist. Royal Wrist shall not be liable for incidental, consequential, indirect, special or punitive damages or liabilities of any kind arising out of or in connection with the sale or use or this product, whether based in contract, tort (including negligence), strict product liability or any other theory, even if Royal Wrist has been advised of the possibility of such damages and even if any limited remedy specified herein is deemed to have failed of its essential purpose, Royal Wrist’s entire liability shall be limited to repair of the purchase price paid, at Royal Wrist’s sole option.</p>
            <p>REQUESTING WARRANTY AND OTHER WATCH REPAIR</p>
            <p>Should you require work under warranty, please send in your watch, a copy of your sales Receipt and the warranty booklet and Warranty card with dealer stamp and a description of the problem to the authorized Royal Wrist watch service center closest to you. Customer will be responsible for all the courier and delivery charges.</p>
            <p>For service work that is not covered under this warranty, the service center may perform the services you request for a charge dependent on watch style and type of work requested. These charges are subject to change.</p>
            <p>Do not send original packaging, as it will not be returned. Royal Wrist highly recommends you insure your parcel and adequately protect the watch during shipment. Royal Wrist is not responsible for products lost or damaged during shipment.</p>
            <p>Note: Warranty Booklet is not equivalent to Warranty Card.</p>
            <p><b>**Warranty is available for orders only from 4st November 2024 onwards</b></p>
        </div>
    )
}