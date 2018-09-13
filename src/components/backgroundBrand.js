import React from 'react'

export default () => {
    return (
        <span className='brand' style={{ display: window.innerWidth < 568 ? 'none' : 'block', position: 'absolute', left: '0', fontSize: '28vw', top: '50%', transform: 'translateY(-50%)', color: '#F7F7F7', fontWeight: '600', zIndex: '0', userSelect: 'none' }}>ZOTOV</span>
    )
}
