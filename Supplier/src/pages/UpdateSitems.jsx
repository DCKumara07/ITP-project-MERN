import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function UpdateSitems() {   
    const { currentSupplier } = useSelector(state => state.supplier);
    const [formData, setFormData] = useState({
        supplierName: '',
        category: '',
        itemName: '',
        unitPrice: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    
    useEffect(() => {
        const fetchSitems = async () => {
            const sitemsId = params.sitemsId;
            const res = await fetch(`/api/sitems/get/${sitemsId}`);
            const data = await res.json();
            if (data.success === false) {
                console.log(data.message);
                return;
            }
            setFormData(data);
        }

        fetchSitems();
    }, []);

    const handleChange = (e) => {
        if (e.target.type === 'text' || e.target.type === 'number') {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value
            });
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError('');
            const res = await fetch(`/api/sitems/update/${params.sitemsId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    supplierRef: currentSupplier._id,
                }),
            });
            const data = await res.json();
            setLoading(false);
            if (!res.ok) {
                throw new Error(data.message || 'Failed to update item');
            }
            navigate(`/sitems/${data._id}`);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4">Update Supplier Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" id="supplierName" placeholder='Supplier Name' className="w-full px-4 py-2 border border-gray-300 rounded-md" onChange={handleChange} value={formData.supplierName} readOnly />
                <input type='text' id='category' placeholder='Category' className='w-full px-4 py-2 border border-gray-300 rounded-md' onChange={handleChange} value={formData.category} />
                <input type="text" id="itemName" placeholder='Item Name' className="w-full px-4 py-2 border border-gray-300 rounded-md" onChange={handleChange} value={formData.itemName} />
                <input type="text" id="unitPrice" placeholder='Unit Price' className="w-full px-4 py-2 border border-gray-300 rounded-md" onChange={handleChange} value={formData.unitPrice} />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">{loading ? 'Updating...' : 'Update Item'}</button>
                {error && <p className='text-red-700 text-sm'>{error}</p>}
            </form>
            <button onClick={() => navigate('/profile')} className="w-full bg-gray-800 mt-5 text-white py-2 rounded-md  transition duration-300">Back</button>
        </div>
    );
}
