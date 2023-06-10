import {Link} from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      {/* begin::Title */}
      <h1 className='fw-bolder fs-2hx text-gray-900 mb-4'>Oops!</h1>
      {/* end::Title */}

      {/* begin::Text */}
      <div className='fw-semibold fs-6 text-gray-500 mb-7'>We can't find that page.</div>
      {/* end::Text */}

      {/* begin::Illustration */}
      <div className='mb-3'>
        <img
          src='src/index'
          className='mw-100 mh-300px theme-light-show'
          alt=''
        />
        <img
          src='src/index'
          className='mw-100 mh-300px theme-dark-show'
          alt=''
        />
      </div>
      {/* end::Illustration */}

      {/* begin::Link */}
      <div className='mb-0'>
        <Link to='/' className='btn btn-sm btn-primary'>
          Return Home
        </Link>
      </div>
      {/* end::Link */}
    </>
  )
}

export {Error404}
