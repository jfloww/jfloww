import React from 'react';
import '../css/Header.css';

function Headers() {
    function main_click() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function kim_click() {
        window.scrollTo({ top: 500, behavior: 'smooth' });
    }
    function shin_click() {
        window.scrollTo({ top: 1000, behavior: 'smooth' });
    }
    function twoJung_click() {
        window.scrollTo({ top: 1500, behavior: 'smooth' });
    }
    function yoon_click() {
        window.scrollTo({ top: 2000, behavior: 'smooth' });
    }
    function ryu_click() {
        window.scrollTo({ top: 2500, behavior: 'smooth' });
    }
    function choi_click() {
        window.scrollTo({ top: 3000, behavior: 'smooth' });
    }
    function threeJung_click() {
        window.scrollTo({ top: 3500, behavior: 'smooth' });
    }
    

    return (
        <div className = 'header'>
            <div className='actions'>
                <span className='header_portfolio' onClick={ main_click } >임태균 대구 한의원</span>
            </div>
            <div className='header_menus'>
                <div className = 'header_menu'>
                    <span className='nav' onClick={ main_click }>원장 소개</span>
                </div>
                <div className = 'header_menu'>
                    <span className='nav' onClick={ kim_click }>수배명단</span>
                </div>
                <div className = 'header_menu'>
                    <span className='nav' onClick={ shin_click }>외계인</span>
                </div>
                <div className = 'header_menu'>
                    <span className='nav' onClick={ choi_click }>초이</span>
                </div>
                <div className = 'header_menu'>
                    <span className='nav' onClick={ twoJung_click }>노숙인</span>
                </div>
                <div className = 'header_menu'>
                    <span className='nav' onClick={ ryu_click }>원이베프</span>
                </div>
                <div className = 'header_menu'>
                    <span className='nav' onClick={ yoon_click }>윤동기형아</span>
                </div>
                <div className = 'header_last'>
                    <span className='nav' onClick={ threeJung_click }>나</span>
                </div>
            </div>
        </div>
    );
}

export default Headers;
