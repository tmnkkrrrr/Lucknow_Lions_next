"use client";
import { useState, useEffect } from 'react';
import { PlusCircle, Trash2, Edit2, Save, X, Search } from 'lucide-react';
import axios from 'axios';
import { HOST } from '@/config';
import LineWaveLoading from '@/app/components/LineWaveLoading/LineWaveLoading';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import paginateData from '@/app/utils'

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Clear success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${HOST}/api/v1/admin/category`);
      // Sort categories alphabetically
      const sortedCategories = response.data.sort((a, b) => a.name.localeCompare(b.name));
      setCategories(sortedCategories);
    } catch (err) {
      setError('Failed to fetch categories');
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  };


  const handleAddCategory = async () => {
    if (newCategory.trim() === '') return;

    // Check for duplicate category name
    if (categories.some(cat => cat.name.toLowerCase() === newCategory.trim().toLowerCase())) {
      setError('Category already exists');
      return;
    }

    try {
      setIsAdding(true);
      const response = await axios.post(`${HOST}/api/v1/admin/category`, {
        name: newCategory.trim()
      });

      setCategories([...categories, response.data].sort((a, b) => a.name.localeCompare(b.name)));
      setNewCategory('');
      setError('');
      setSuccessMessage('Category added successfully');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add category');
    } finally {
      setIsAdding(false);
    }
  };


  const handleEditCategory = async (id) => {
    if (editValue.trim() === '') return;

    if (categories.some(cat => cat.id !== id && cat.name.toLowerCase() === editValue.trim().toLowerCase())) {
      setError('Category name already exists');
      return;
    }

    try {
      const response = await axios.put(`${HOST}/api/v1/admin/category/${id}`, {
        name: editValue.trim()  // Updated to match API expectation
      });

      const updatedCategories = categories.map(cat =>
        cat.id === id ? { ...cat, name: editValue.trim() } : cat
      ).sort((a, b) => a.name.localeCompare(b.name));

      setCategories(updatedCategories);
      setEditingId(null);
      setEditValue('');
      setError('');
      setSuccessMessage('Category updated successfully');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update category');
    }
  };


  const handleDeleteCategory = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;

    try {
      await axios.delete(`${HOST}/api/v1/admin/category/${id}`);
      setCategories(categories.filter(cat => cat.id !== id));
      setError('');
      setSuccessMessage('Category deleted successfully');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete category');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newCategory.trim() !== '') {
      handleAddCategory();
    }
  };

  const handleEditKeyPress = (e) => {
    if (e.key === 'Enter' && editValue.trim() !== '') {
      handleEditCategory(editingId);
    }
    if (e.key === 'Escape') {
      setEditingId(null);
    }
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startEdit = (category) => {
    setEditingId(category.id);
    setEditValue(category.name);
  };

  const { PaginatedItems , pagination } = paginateData(filteredCategories, currentPage, itemsPerPage);

  const onPageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
   };

// Update the JSX where you map through categories

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="border-b border-gray-200 bg-gray-50 p-6">
              <h1 className="text-2xl font-bold text-gray-900">Manage Categories</h1>
              <p className="mt-1 text-sm text-gray-500">Add, edit, or remove Blog Categories</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Alerts */}
              {error && (
                <div className="flex items-center p-4 bg-red-50 border-l-4 border-red-400 rounded-md">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {successMessage && (
                <div className="flex items-center p-4 bg-green-50 border-l-4 border-green-400 rounded-md">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">{successMessage}</p>
                  </div>
                </div>
              )}

              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 p-3 border-4 border-grey-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Add Category Input */}
              <div className="flex gap-3">
                <input
                  type="text"
                  className="flex-1 rounded-lg p-2 border-4 border-grey-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add new category"
                />
                <button
                  onClick={handleAddCategory}
                  disabled={isAdding || newCategory.trim() === ''}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <PlusCircle className="h-5 w-5 inline-block mr-2" />
                  Add
                </button>
              </div>

              {/* Categories List */}
              {loading ? (
                <LineWaveLoading />
              ) : (
                <div className="space-y-3">
                  {PaginatedItems.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200"
                    >
                      {editingId === category.id ? (
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            className="flex-1 px-3 py-2 border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onKeyUp={handleEditKeyPress}
                            autoFocus
                          />
                          <button
                            onClick={() => handleEditCategory(category.id)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                            title="Save"
                          >
                            <Save className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="p-2 text-gray-600 hover:bg-gray-200 rounded-md transition-colors duration-200"
                            title="Cancel"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <span className="text-gray-900 font-medium">{category.name}</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => startEdit(category)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                              title="Edit"
                            >
                              <Edit2 className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleDeleteCategory(category.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                              title="Delete"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  {filteredCategories.length === 0 && !loading && (
                    <div className="text-center py-8">
                      <div className="text-gray-400">
                        {searchTerm ? 'No matching categories found' : 'No categories yet'}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
          <button
            onClick={() => onPageChange(pagination.currentPage - 1)}
            disabled={!pagination.hasPrevPage}
            className="relative px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
          <button
            onClick={() => onPageChange(pagination.currentPage + 1)}
            disabled={!pagination.hasNextPage}
            className="relative px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}