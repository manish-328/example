import BlackCardAtom from "../atoms/BlackCardAtom";
import ChatIcon from "/assets/chatLogo.png"; // adjust path

export default function BlackCardSection() {
  return (
    <section className="mt-8 px-6 md:px-16 ml-20 mr-20 ">
      <BlackCardAtom
        line1="B2B 전문 의류 쇼핑몰!"
        line2="15년 이상의 노하우로 믿고 거래 하세요"
        line3="수많은 기업이 선택한 신뢰받는 쇼핑 소식, 지금 만나보세요"
        chatIconSrc={ChatIcon}
      />
    </section>
  );
}
