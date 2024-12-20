'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Calendar, FileText, FolderOpen, LayoutDashboard, Upload, Users2, Grid, MapPin, Languages } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ClaimsPage() {
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    statement: null,
    contract: null,
    arbitration: null,
    additional: null
  });

  const [formData, setFormData] = useState({
    contractValue: '',
    claimValue: '',
    place: '',
    language: '',
  });

  const [errors, setErrors] = useState({
    contractValue: '',
    claimValue: '',
    place: '',
    language: '',
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const file = e.target.files?.[0] || null;
    setFiles(prev => ({ ...prev, [key]: file }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.contractValue.trim()) {
      newErrors.contractValue = 'Contract Value is required';
      isValid = false;
    }
    if (!formData.claimValue.trim()) {
      newErrors.claimValue = 'Claim Value is required';
      isValid = false;
    }
    if (!formData.place.trim()) {
      newErrors.place = 'Place is required';
      isValid = false;
    }
    if (!formData.language.trim()) {
      newErrors.language = 'Language is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white p-6">
        <div className="mb-8">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-600">
            <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
          </svg>
        </div>
        <nav className="space-y-2">
          <Link href="#" className="flex items-center space-x-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link href="#" className="flex items-center space-x-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <FolderOpen size={20} />
            <span>My Cases</span>
          </Link>
          <Link href="#" className="flex items-center space-x-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <FileText size={20} />
            <span>Activities</span>
          </Link>
          <Link href="#" className="flex items-center space-x-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <Calendar size={20} />
            <span>Calendar</span>
          </Link>
          <Link href="#" className="flex items-center space-x-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <FileText size={20} />
            <span>Files</span>
          </Link>
          <Link href="#" className="flex items-center space-x-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <Users2 size={20} />
            <span>Open a Dispute</span>
          </Link>
        </nav>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-sm mb-2">Get Justice on every Claims</h3>
          <div className="relative h-40 w-full">
            <Image
              src="/placeholder.svg?height=160&width=200"
              alt="Justice Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end space-x-4 mb-8">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Users2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Progress Steps */}
          <div className="bg-white p-6 rounded-lg mb-8">
            <div className="grid grid-cols-7 gap-4">
              {[
                { step: '01', label: 'Preliminary', done: true },
                { step: '02', label: 'Your Details', done: true },
                { step: '03', label: 'KYC', done: true },
                { step: '04', label: 'Parties', done: false },
                { step: '05', label: 'Claim', done: false },
                { step: '06', label: 'Review', done: false },
                { step: '07', label: 'Payment', done: false }
              ].map((item, index) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="text-sm text-slate-600 mb-4">{item.label}</div>
                  <div className="flex items-center w-full">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm ${
                      item.done ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.step}
                    </div>
                    {index < 6 && (
                      <div className={`h-[2px] flex-1 ${
                        index < 2 ? 'bg-blue-600' : 'bg-slate-200'
                      }`} />
                    )}
                  </div>
                  {!item.done && <div className="text-xs text-slate-400 mt-2">(Approx 5 Min)</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white p-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-6">File your Claim.</h1>
            
            {/* First Row */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {/* Claim Value */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-blue-600">
                  <Grid className="h-5 w-5" />
                  <h2 className="text-lg">Claim Value</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Contract Value</Label>
                    <div className="flex gap-2">
                      <Input
                        name="contractValue"
                        placeholder="10,00.00"
                        className="rounded-md"
                        value={formData.contractValue}
                        onChange={handleInputChange}
                      />
                      <Select defaultValue="USD">
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="USD" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.contractValue && <p className="text-red-500 text-sm mt-1">{errors.contractValue}</p>}
                  </div>
                  <div>
                    <Label>Claim Value</Label>
                    <div className="flex gap-2">
                      <Input
                        name="claimValue"
                        placeholder="15,00.00"
                        className="rounded-md"
                        value={formData.claimValue}
                        onChange={handleInputChange}
                      />
                      <Select defaultValue="USD">
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="USD" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.claimValue && <p className="text-red-500 text-sm mt-1">{errors.claimValue}</p>}
                    <p className="text-sm text-orange-500 mt-1">150% of Contract Value</p>
                  </div>
                </div>
              </div>

              {/* Place */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-blue-600">
                  <MapPin className="h-5 w-5" />
                  <h2 className="text-lg">Place</h2>
                </div>
                <Input 
                  name="place"
                  placeholder="Select the Place for proceedings" 
                  className="mb-4 rounded-md"
                  value={formData.place}
                  onChange={handleInputChange}
                />
                {errors.place && <p className="text-red-500 text-sm mt-1">{errors.place}</p>}
                <p className="text-sm text-gray-600 mb-4">
                  Is the place for the proceedings the one mentioned in the agreement?
                </p>
                <RadioGroup defaultValue="no" className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Language */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-blue-600">
                  <Languages className="h-5 w-5" />
                  <h2 className="text-lg">Language</h2>
                </div>
                <Input 
                  name="language"
                  placeholder="Select the language for proceedings" 
                  className="mb-4 rounded-md"
                  value={formData.language}
                  onChange={handleInputChange}
                />
                {errors.language && <p className="text-red-500 text-sm mt-1">{errors.language}</p>}
                <p className="text-sm text-gray-600 mb-4">
                  Is the language for the proceedings the one mentioned in the agreement?
                </p>
                <RadioGroup defaultValue="no" className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="lang-yes" />
                    <Label htmlFor="lang-yes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="lang-no" />
                    <Label htmlFor="lang-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-3 gap-8">
              {/* Statement */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-blue-600">
                  <FileText className="h-5 w-5" />
                  <h2 className="text-lg">Statement</h2>
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 h-[180px]">
                  <textarea
                    placeholder="Write your Statement Here"
                    className="w-full h-[100px] mb-2 p-2 border rounded-md resize-none"
                  />
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">or</div>
                    <input
                      type="file"
                      id="statement"
                      className="hidden"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e, 'statement')}
                    />
                    <label 
                      htmlFor="statement" 
                      className="inline-flex items-center gap-2 text-blue-600 cursor-pointer"
                    >
                      <Upload className="h-4 w-4" />
                      Upload a PDF
                    </label>
                  </div>
                </div>
              </div>

              {/* Agreement under Disputes */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-blue-600">
                  <FileText className="h-5 w-5" />
                  <h2 className="text-lg">Agreement under Disputes</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 h-[180px] flex flex-col items-center justify-center">
                    <input
                      type="file"
                      id="contract"
                      className="hidden"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e, 'contract')}
                    />
                    <label htmlFor="contract" className="flex flex-col items-center gap-2 cursor-pointer">
                      <Upload className="h-6 w-6 text-blue-600" />
                      <div className="text-center">
                        <p className="text-blue-600">Upload the Contract</p>
                        <p className="text-sm text-gray-500">Max 25MB PDF</p>
                      </div>
                    </label>
                  </div>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 h-[180px] flex flex-col items-center justify-center">
                    <input
                      type="file"
                      id="arbitration"
                      className="hidden"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e, 'arbitration')}
                    />
                    <label htmlFor="arbitration" className="flex flex-col items-center gap-2 cursor-pointer">
                      <Upload className="h-6 w-6 text-blue-600" />
                      <div className="text-center">
                        <p className="text-blue-600">Arbitration Agreement</p>
                        <p className="text-sm text-gray-500">Max 25MB PDF</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Additional Documentation */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-blue-600">
                  <FileText className="h-5 w-5" />
                  <h2 className="text-lg">Additional Documentation</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 h-[180px] flex flex-col items-center justify-center">
                    <input
                      type="file"
                      id="additional"
                      className="hidden"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e, 'additional')}
                    />
                    <label htmlFor="additional" className="flex flex-col items-center gap-2 cursor-pointer">
                      <Upload className="h-6 w-6 text-blue-600" />
                      <div className="text-center">
                        <p className="text-blue-600">Upload the Contract</p>
                        <p className="text-sm text-gray-500">Max 25MB PDF</p>
                      </div>
                    </label>
                  </div>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 h-[180px] flex items-center justify-center">
                    <Button 
                      variant="outline" 
                      className="w-12 h-12 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      <span className="text-xl">+</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
