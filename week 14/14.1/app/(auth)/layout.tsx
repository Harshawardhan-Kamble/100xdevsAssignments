const banner = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (<>
    <div className='text-center text-black'>Signup now and get 20%off 
    </div>
    <div>
        {children}
    </div></>
  )
}

export default banner