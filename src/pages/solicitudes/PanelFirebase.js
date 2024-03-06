import React, { useState, useEffect } from "react";
import { firestore } from "@/utilss/firebase";

const PanelFirebase = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const enquiriesRef = firestore.collection("enquiries");
        const snapshot = await enquiriesRef.get();
        const enquiriesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Ordenar los mensajes por hora de envío
        enquiriesData.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setEnquiries(enquiriesData);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      <h2 className="text-lg font-bold mb-4">Enquiries</h2>
      {enquiries.map((enquiry, index) => (
        <div key={enquiry.id} className="bg-white shadow-md rounded-md p-4 mb-4">
          <p className="text-gray-600 font-semibold">Message #{index + 1}</p>
          <p><strong className="text-blue-600">ID de la Persona:</strong> {enquiry.id}</p>
          <p><strong className="text-blue-600">Nombre:</strong> {enquiry.name}</p>
          <p><strong className="text-blue-600">Email:</strong> {enquiry.email}</p>
          <p><strong className="text-blue-600">Celular:</strong> {enquiry.phone || 'Not specified'}</p>
          <p><strong>Mensaje:</strong> {enquiry.message}</p>
          <p><strong>Fecha y Hora de Envío:</strong> {enquiry.createdAt ? new Date(enquiry.createdAt).toLocaleString() : 'Not specified'}</p>
          <p><strong>Fecha y Hora de la Cita:</strong> {enquiry.date ? new Date(enquiry.date.seconds * 1000).toLocaleString() : 'Not specified'}</p>
        </div>
      ))}
    </div>
  );
};

export default PanelFirebase;


