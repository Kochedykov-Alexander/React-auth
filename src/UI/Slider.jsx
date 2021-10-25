import React from 'react'
import logo from '../resources/img/react.png'

export default function Slider() {
	return (
		<div class="container">
			<div class="main__slider">
				<div id="carouselControl" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active" style={{height: '600px'}}>
						<img src={logo} class="d-block w-100" style={{height: '100%'}} alt="..."/>
						</div>
						<div class="carousel-item" style={{height: '600px'}}>
						<img src={logo} class="d-block w-100" style={{height: '100%'}} alt="..."/>
						</div>
						<div class="carousel-item" style={{height: '600px'}}>
						<img src={logo} class="d-block w-100" style={{height: '100%'}} alt="..."/>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselControl" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselControl" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	)
}
