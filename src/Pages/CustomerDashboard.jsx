import React, { useState, useEffect } from 'react';
import DashboardHero from "../Components/Dashboard/DashboardHero";
import OrderHistory from "../Components/Dashboard/OrderHistory";
import SavedAddresses from "../Components/Dashboard/SavedAddresses";
import AccountSettings from "../Components/Dashboard/AccountSettings";
import ProductGrid from "../Components/Dashboard/ProductGrid";
import Services from "../Components/Home/Services/Services";
import { toast } from 'react-hot-toast';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
});

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("shop");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Please login to access dashboard');
          return;
        }

        const { data } = await api.get('/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch user data');
        toast.error('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []);

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const { data } = await api.get('/orders', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(data.data);
      } catch (err) {
        toast.error('Failed to fetch orders');
      }
    };

    if (activeTab === 'orders') {
      fetchOrders();
    }
  }, [activeTab]);

  // Fetch addresses
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const { data } = await api.get('/users/addresses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAddresses(data.data);
      } catch (err) {
        toast.error('Failed to fetch addresses');
      }
    };

    if (activeTab === 'addresses') {
      fetchAddresses();
    }
  }, [activeTab]);

  const handleAddressUpdate = async (addressId, action, updatedData) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please login to continue');
        return;
      }

      switch (action) {
        case "edit":
          await api.put(`/users/addresses/${addressId}`, updatedData, {
            headers: { Authorization: `Bearer ${token}` }
          });
          toast.success('Address updated successfully');
          break;
        case "delete":
          await api.delete(`/users/addresses/${addressId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setAddresses(addresses.filter((addr) => addr.id !== addressId));
          toast.success('Address deleted successfully');
          break;
        case "setDefault":
          await api.put(`/users/addresses/${addressId}/default`, {}, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setAddresses(
            addresses.map((addr) => ({
              ...addr,
              isDefault: addr.id === addressId,
            }))
          );
          toast.success('Default address updated');
          break;
        default:
          break;
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update address');
    }
  };

  const handleProfileUpdate = async (updatedData) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please login to continue');
        return;
      }

      const { data } = await api.put('/users/profile', updatedData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(data.data);
      toast.success('Profile updated successfully');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update profile');
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{error}</h2>
          <button
            onClick={() => window.location.href = '/login'}
            className="text-green-600 hover:text-green-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHero user={user} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-8">
          <TabButton
            active={activeTab === "shop"}
            onClick={() => setActiveTab("shop")}
          >
            Shop
          </TabButton>
          <TabButton
            active={activeTab === "orders"}
            onClick={() => setActiveTab("orders")}
          >
            Orders
          </TabButton>
          <TabButton
            active={activeTab === "addresses"}
            onClick={() => setActiveTab("addresses")}
          >
            Addresses
          </TabButton>
          <TabButton
            active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </TabButton>
        </div>

        {activeTab === "shop" && <ProductGrid />}
        {activeTab === "orders" && <OrderHistory orders={orders} />}
        {activeTab === "addresses" && (
          <SavedAddresses
            addresses={addresses}
            onEdit={(id) => handleAddressUpdate(id, "edit")}
            onDelete={(id) => handleAddressUpdate(id, "delete")}
            onSetDefault={(id) => handleAddressUpdate(id, "setDefault")}
          />
        )}
        {activeTab === "settings" && (
          <AccountSettings user={user} onUpdate={handleProfileUpdate} />
        )}
      </div>

      <Services />
    </div>
  );
};

const TabButton = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium rounded-lg transition-colors ${
      active
        ? "bg-green-600 text-white"
        : "bg-white text-gray-600 hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);

export default CustomerDashboard;
