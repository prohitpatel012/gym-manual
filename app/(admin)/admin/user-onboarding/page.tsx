import React from 'react'

function UserOnboarding() {
    return (
        <div>
            <form action="" className='flex flex-col gap-2  max-w-md mx-auto'>
                <div className='gap-2'>
                    <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                    <input type="text" id="name" name="name" className='mt-1 block w-full rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border border-gray-200' />
                </div>
                <div className='gap-2'>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                    <input type="email" id="email" name="email" className='mt-1 block w-full rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border border-gray-200' />
                </div>
                <div className='gap-2'>
                    <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                    <input type="password" id="password" name="password" className='mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border border-gray-200' />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="role"
                        className="text-sm font-medium text-gray-700"
                    >
                        Role
                    </label>

                    <select
                        id="role"
                        name="role"
                        className="
      w-full
      border border-gray-200
      bg-white
      py-4
      text-sm
      shadow-sm
      outline-none
      transition
      focus:border-indigo-500
      focus:ring-2
      focus:ring-indigo-500/10
      hover:border-gray-400
      
    "
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>


                <button type="submit" className='mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 cursor-pointer'>Submit</button>
            </form>
        </div>
    )
}

export default UserOnboarding   