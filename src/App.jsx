import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="flex flex-col gap-4 border border-gray-300 bg-white rounded-xl p-4 mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <button 
        className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
          hasLiked ? 'bg-red-500' : 'bg-blue-500'
        }`}
        onClick={() => setHasLiked(!hasLiked)} 
      >
        {hasLiked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to Flipazon</h1>
      
      <div className="flex flex-col gap-4 max-w-md">
        <h3 className="text-lg font-semibold text-gray-600">Categories</h3>
        
        <Card title="Electronics" />
        <Card title="Clothing" />
        <Card title="Books" />
        <Card title="Toys" />
        <Card title="Furniture" />
        <Card title="Shoes" />
        <Card title="Jewelry" />
      </div>
    </div>
  )
}

export default App
