import { Document, Page, Text, View } from '@react-pdf/renderer';

export default function PDFTable({ historyDetail, total_paid }) {
    return (
        <Document>
            <Page>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>Bill Number: {historyDetail.id}</Text>
                    <Text style={{ fontSize: 16, marginBottom: 10 }}>Date:  {new Date(historyDetail.date_created).toLocaleString([], {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', flex: 0.1 }}>#</Text>
                        <Text style={{ fontWeight: 'bold', flex: 0.4 }}>Product Code</Text>
                        <Text style={{ fontWeight: 'bold', flex: 0.15 }}>Price</Text>
                        <Text style={{ fontWeight: 'bold', flex: 0.15 }}>Discount</Text>
                        <Text style={{ fontWeight: 'bold', flex: 0.2 }}>Quantity</Text>
                    </View>
                    {historyDetail.products.map((product, index) => (
                        <View key={index} style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <Text style={{ flex: 0.1 }}>{index + 1}</Text>
                            <Text style={{ flex: 0.4 }}>{product.name_code}</Text>
                            <Text style={{ flex: 0.15 }}>${Number(product.price).toLocaleString()}</Text>
                            <Text style={{ flex: 0.15 }}>{product.sale}%</Text>
                            <Text style={{ flex: 0.2 }}>{product.quantity}</Text>
                        </View>
                    ))}
                    <View style={{ flexDirection: 'row', marginTop: 40 }}>
                        <Text style={{ fontWeight: 'bold', flex: 0.1 }}>#</Text>
                        <Text style={{ fontWeight: 'bold', flex: 0.4 }}>Total Price After Discount</Text>
                        <Text style={{ fontWeight: 'bold', flex: 0.15 }}>${total_paid}</Text>
                        <Text style={{ fontWeight: 'bold', flex: 0.15 }}></Text>
                        <Text style={{ fontWeight: 'bold', flex: 0.2 }}></Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
};