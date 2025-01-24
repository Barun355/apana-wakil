import React, { useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '../../../lib/types';
import { get } from '../../../lib/network';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ServicesGrid: React.FC<{ searchQuery: string}> = ({ searchQuery }) => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Service Description',
      description: 'Legal service details here',
      price: 98,
      time: '10min',
      rating: 4,
      image: 'https://media.istockphoto.com/id/1131313549/photo/lawyers-consulted-on-various-lawsuits.jpg?s=612x612&w=0&k=20&c=Dh6T2n82DM8f5mnPxMFITIWD27GVCGvnNmz3xZPJN3w=',
      serviceTag: 'service tag',
    },
    {
      id: '2',
      title: 'Service Description',
      description: 'Legal service details here',
      price: 98,
      time: '10min',
      rating: 4,
      image: 'https://media.istockphoto.com/id/1131313549/photo/lawyers-consulted-on-various-lawsuits.jpg?s=612x612&w=0&k=20&c=Dh6T2n82DM8f5mnPxMFITIWD27GVCGvnNmz3xZPJN3w=',
      serviceTag: 'service tag',
    },
    {
      id: '3',
      title: 'Service Description',
      description: 'Legal service details here',
      price: 98,
      time: '10min',
      rating: 4,
      image: 'https://media.istockphoto.com/id/1131313549/photo/lawyers-consulted-on-various-lawsuits.jpg?s=612x612&w=0&k=20&c=Dh6T2n82DM8f5mnPxMFITIWD27GVCGvnNmz3xZPJN3w=',
      serviceTag: 'service tag',
    },
    {
      id: '4',
      title: 'Service Description',
      description: 'Legal service details here',
      price: 98,
      time: '10min',
      rating: 4,
      image: 'https://media.istockphoto.com/id/1131313549/photo/lawyers-consulted-on-various-lawsuits.jpg?s=612x612&w=0&k=20&c=Dh6T2n82DM8f5mnPxMFITIWD27GVCGvnNmz3xZPJN3w=',
      serviceTag: 'service tag',
    },
    {
      id: '5',
      title: 'Service Description',
      description: 'Legal service details here',
      price: 98,
      time: '10min',
      rating: 4,
      image: 'https://media.istockphoto.com/id/1131313549/photo/lawyers-consulted-on-various-lawsuits.jpg?s=612x612&w=0&k=20&c=Dh6T2n82DM8f5mnPxMFITIWD27GVCGvnNmz3xZPJN3w=',
      serviceTag: 'service tag',
    },
    {
      id: '6',
      title: 'Service Description',
      description: 'Legal service details here',
      price: 98,
      time: '10min',
      rating: 4,
      image: 'https://media.istockphoto.com/id/1131313549/photo/lawyers-consulted-on-various-lawsuits.jpg?s=612x612&w=0&k=20&c=Dh6T2n82DM8f5mnPxMFITIWD27GVCGvnNmz3xZPJN3w=',
      serviceTag: 'service tag',
    },
    {
      id: '7',
      title: 'Service Description',
      description: 'Legal service details here',
      price: 98,
      time: '10min',
      rating: 4,
      image: 'https://media.istockphoto.com/id/1131313549/photo/lawyers-consulted-on-various-lawsuits.jpg?s=612x612&w=0&k=20&c=Dh6T2n82DM8f5mnPxMFITIWD27GVCGvnNmz3xZPJN3w=',
      serviceTag: 'service tag',
    },
    // Add more services as needed
  ];
  // if (searchQuery !== null || searchQuery !== undefined || searchQuery !== ""){
  //   console.log(searchQuery)
  // }

  const navigate = useNavigate()


  async function getLawyerService(){
    const GET_LAYER = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_LAWYER_ROUTE + '/'
    console.log(GET_LAYER)
    const token = localStorage.getItem('token')
    if (!token){
      toast.error('Login First to get the access')
      navigate('/sigin')
      return
    }
    const lawyer = await get(GET_LAYER, {headers: { 'Authorization': token }})

    console.log(lawyer)
  }

  useEffect(() => {
    getLawyerService()
  })
  
  return (
    <div className="grid grid-cols-2 gap-6">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesGrid;
