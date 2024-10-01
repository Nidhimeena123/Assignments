import React from 'react'
import burger from '../../assests/images/cat-13.png'
import kiwi from '../../assests/images/cat-12.png'
import vegetable from '../../assests/images/cat-1.png'
import apple from '../../assests/images/cat-9.png'
import peach from '../../assests/images/cat-11.png'
import strawberry from '../../assests/images/cat-2.png'
import snack from '../../assests/images/cat-3.png'
import plum from '../../assests/images/cat-4.png'







function Section() {
  return (
    <>
    <div className="container3">
        <div className="heading-line d-flex align-items-center">
            <div className="heading">
                Featured Categories
            </div>
            <div className="heading-line-items d-flex">
                <div>
                    Cake & Milk
                </div>
                <div>
                    Coffee & Teas
                </div>
                <div>
                    Pet Foods
                </div>
                <div>
                    Vegetables
                </div>
            </div>
        </div>


        <div className="container3-items d-flex justify-content-around">
            <div className="item">
                <img src={burger} alt="" />
                <h4>Cake & Milk</h4>
                <h6>26 items</h6>
            </div>

            <div className="item">
                <img src={kiwi} alt="" />
                <h4>Cake & Milk</h4>
                <h6>26 items</h6>
            </div>

            <div className="item">
                <img src={peach} alt="" />
                <h4>Cake & Milk</h4>
                <h6>26 items</h6>
            </div>

            <div className="item">
                <img src={apple} alt="" />
                <h4>Cake & Milk</h4>
                <h6>26 items</h6>
            </div>

            <div className="item">
                <img src={snack} alt="" />
                <h4>Cake & Milk</h4>
                <h6>26 items</h6>
            </div>

            <div className="item">
                <img src={vegetable} alt="" />
                <h4>Cake & Milk</h4>
                <h6>26 items</h6>
            </div>

            <div className="item">
                <img src={strawberry} alt="" />
                <h4>Cake & Milk</h4>
                <h6>26 items</h6>
            </div>

            <div className="item">
                <img src={plum} alt="" />
                <h4>Cake & Milk</h4>
                <h6>26 items</h6>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section