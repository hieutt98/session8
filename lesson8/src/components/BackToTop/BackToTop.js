import { useEffect, useState } from 'react';
import './BackToTop.css'



function BackToTop() {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 200) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        }
        window.addEventListener('scroll', handleScroll)

    })


    return (
        <div className="Top">
            <div className="text">
                <p style={{ textAlign: 'left' }}>- Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />

                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />

                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />

                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />

                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />

                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />

                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />

                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />

                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                    - Thực hiện tạo ra button “Back to top”. Khi click, điều hướng người dùng về vị trí đầu trang.
                    - Hiển thị button back to top khi người dùng tiến hành cuộn lên trên và vị trí cuộn hiện tại không phải ở đầu trang
                    - Ẩn button back to top khi người dùng cuộn xuống dưới hoặc vị trí cuộn hiện tại là đầu trang
                    - (Nâng cao) Styling thêm với các hiệu ứng cuộn mượt hơn với button back to top và animation hiển thị / ẩn button đó <br />
                </p>
            </div>
            <div className="button">
                {backToTop && (
                    <a href="#">
                        <button className="btn">
                            <i className="fa-solid fa-angles-up"></i>
                        </button>

                    </a>
                )}
            </div>
        </div>
    );
}

export default BackToTop;
