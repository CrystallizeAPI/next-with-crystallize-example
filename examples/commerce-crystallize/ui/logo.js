const Logo = ({ color = '#000', size = '96' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M74.8908 84.0431C75.4657 84.7237 76.2533 85.6555 77.7709 85.6555C79.2879 85.6555 80.075 84.7237 80.65 84.0431C81.1897 83.4046 81.4767 83.0976 82.0937 83.0976C82.6129 83.0976 83.0338 82.6766 83.0338 82.1574C83.0338 81.6382 82.6129 81.2173 82.0937 81.2173C80.5766 81.2173 79.789 82.1491 79.2136 82.8292C78.6743 83.4682 78.3874 83.7747 77.7709 83.7747C77.1534 83.7747 76.8669 83.4677 76.3272 82.8292C75.7522 82.1491 74.9646 81.2173 73.4475 81.2173C71.93 81.2173 71.1424 82.1491 70.5675 82.8297C70.0282 83.4682 69.7412 83.7747 69.1247 83.7747C68.5077 83.7747 68.2212 83.4682 67.6815 82.8292C67.1065 82.1491 66.3194 81.2173 64.8024 81.2173C63.2853 81.2173 62.4977 82.1491 61.9228 82.8292C61.383 83.4682 61.0965 83.7747 60.4795 83.7747C59.8625 83.7747 59.5761 83.4682 59.0368 82.8292C58.4614 82.1491 57.6742 81.2173 56.1567 81.2173C54.6402 81.2173 53.8525 82.1491 53.2781 82.8297C52.7383 83.4682 52.4519 83.7747 51.8354 83.7747C51.2189 83.7747 50.9319 83.4682 50.3926 82.8297C49.8177 82.1491 49.0306 81.2173 47.5135 81.2173C45.9965 81.2173 45.2093 82.1491 44.6344 82.8297C44.0951 83.4682 43.8086 83.7747 43.1921 83.7747C42.5751 83.7747 42.2886 83.4682 41.7489 82.8292C41.1745 82.1491 40.3868 81.2173 38.8698 81.2173C37.3532 81.2173 36.5656 82.1491 35.9912 82.8297C35.4514 83.4682 35.1649 83.7747 34.5484 83.7747C33.9319 83.7747 33.6454 83.4682 33.1062 82.8297C32.5317 82.1491 31.7441 81.2173 30.2276 81.2173C28.7105 81.2173 27.9234 82.1491 27.3484 82.8297C26.8092 83.4682 26.5222 83.7747 25.9057 83.7747C25.2892 83.7747 25.0022 83.4682 24.463 82.8297C23.888 82.1491 23.1009 81.2173 21.5839 81.2173C20.0668 81.2173 19.2797 82.1491 18.7047 82.8297C18.1655 83.4682 17.8785 83.7747 17.262 83.7747C16.6455 83.7747 16.359 83.4682 15.8193 82.8297C15.2443 82.1491 14.4572 81.2173 12.9402 81.2173C12.4209 81.2173 12 81.6382 12 82.1574C12 82.6766 12.4209 83.0976 12.9402 83.0976C13.5567 83.0976 13.8436 83.4046 14.3829 84.0431C14.9578 84.7237 15.745 85.6555 17.262 85.6555C18.779 85.6555 19.5662 84.7237 20.1411 84.0431C20.6804 83.4046 20.9674 83.0976 21.5839 83.0976C22.2004 83.0976 22.4869 83.4046 23.0266 84.0431C23.6015 84.7237 24.3887 85.6555 25.9057 85.6555C27.4227 85.6555 28.2099 84.7237 28.7848 84.0431C29.3246 83.4046 29.6111 83.0976 30.2276 83.0976C30.8436 83.0976 31.1305 83.4046 31.6698 84.0431C32.2443 84.7237 33.0314 85.6555 34.5484 85.6555C36.0655 85.6555 36.8526 84.7237 37.4275 84.0431C37.9668 83.4046 38.2533 83.0976 38.8698 83.0976C39.4863 83.0976 39.7733 83.4046 40.3125 84.0431C40.8875 84.7237 41.6751 85.6555 43.1921 85.6555C44.7087 85.6555 45.4963 84.7237 46.0708 84.0431C46.6105 83.4046 46.897 83.0976 47.5135 83.0976C48.13 83.0976 48.417 83.4046 48.9562 84.0431C49.5307 84.7237 50.3183 85.6555 51.8354 85.6555C53.3524 85.6555 54.1395 84.7237 54.7145 84.0431C55.2537 83.4046 55.5402 83.0976 56.1567 83.0976C56.7742 83.0976 57.0607 83.4046 57.6004 84.0431C58.1754 84.7237 58.9625 85.6555 60.4795 85.6555C61.9966 85.6555 62.7842 84.7237 63.3591 84.0431C63.8989 83.4046 64.1854 83.0976 64.8024 83.0976C65.4189 83.0976 65.7054 83.4046 66.2451 84.0431C66.8201 84.7237 67.6077 85.6555 69.1247 85.6555C70.6418 85.6555 71.4289 84.7237 72.0038 84.0431C72.5436 83.4046 72.8306 83.0976 73.4475 83.0976C74.0645 83.0976 74.351 83.4046 74.8908 84.0431Z"
      fill={color}
    />
    <path
      d="M74.8908 89.3876C75.4657 90.0682 76.2533 91 77.7709 91C79.2879 91 80.075 90.0682 80.65 89.3876C81.1897 88.7491 81.4767 88.4421 82.0937 88.4421C82.6129 88.4421 83.0338 88.0212 83.0338 87.5019C83.0338 86.9827 82.6129 86.5618 82.0937 86.5618C80.5766 86.5618 79.789 87.4936 79.2136 88.1737C78.6743 88.8127 78.3874 89.1192 77.7709 89.1192C77.1534 89.1192 76.8669 88.8122 76.3272 88.1737C75.7522 87.4936 74.9646 86.5618 73.4475 86.5618C71.93 86.5618 71.1424 87.4936 70.5675 88.1742C70.0282 88.8127 69.7412 89.1192 69.1247 89.1192C68.5077 89.1192 68.2212 88.8127 67.6815 88.1737C67.1065 87.4936 66.3194 86.5618 64.8024 86.5618C63.2853 86.5618 62.4977 87.4936 61.9228 88.1737C61.383 88.8127 61.0965 89.1192 60.4795 89.1192C59.8625 89.1192 59.5761 88.8127 59.0368 88.1737C58.4614 87.4936 57.6742 86.5618 56.1567 86.5618C54.6402 86.5618 53.8525 87.4936 53.2781 88.1742C52.7383 88.8127 52.4519 89.1192 51.8354 89.1192C51.2189 89.1192 50.9319 88.8127 50.3926 88.1742C49.8177 87.4936 49.0306 86.5618 47.5135 86.5618C45.9965 86.5618 45.2093 87.4936 44.6344 88.1742C44.0951 88.8127 43.8086 89.1192 43.1921 89.1192C42.5751 89.1192 42.2886 88.8127 41.7489 88.1737C41.1745 87.4936 40.3868 86.5618 38.8698 86.5618C37.3532 86.5618 36.5656 87.4936 35.9912 88.1742C35.4514 88.8127 35.1649 89.1192 34.5484 89.1192C33.9319 89.1192 33.6454 88.8127 33.1062 88.1742C32.5317 87.4936 31.7441 86.5618 30.2276 86.5618C28.7105 86.5618 27.9234 87.4936 27.3484 88.1742C26.8092 88.8127 26.5222 89.1192 25.9057 89.1192C25.2892 89.1192 25.0022 88.8127 24.463 88.1742C23.888 87.4936 23.1009 86.5618 21.5839 86.5618C20.0668 86.5618 19.2797 87.4936 18.7047 88.1742C18.1655 88.8127 17.8785 89.1192 17.262 89.1192C16.6455 89.1192 16.359 88.8127 15.8193 88.1742C15.2443 87.4936 14.4572 86.5618 12.9402 86.5618C12.4209 86.5618 12 86.9827 12 87.5019C12 88.0212 12.4209 88.4421 12.9402 88.4421C13.5567 88.4421 13.8436 88.7491 14.3829 89.3876C14.9578 90.0682 15.745 91 17.262 91C18.779 91 19.5662 90.0682 20.1411 89.3876C20.6804 88.7491 20.9674 88.4421 21.5839 88.4421C22.2004 88.4421 22.4869 88.7491 23.0266 89.3876C23.6015 90.0682 24.3887 91 25.9057 91C27.4227 91 28.2099 90.0682 28.7848 89.3876C29.3246 88.7491 29.6111 88.4421 30.2276 88.4421C30.8436 88.4421 31.1305 88.7491 31.6698 89.3876C32.2443 90.0682 33.0314 91 34.5484 91C36.0655 91 36.8526 90.0682 37.4275 89.3876C37.9668 88.7491 38.2533 88.4421 38.8698 88.4421C39.4863 88.4421 39.7733 88.7491 40.3125 89.3876C40.8875 90.0682 41.6751 91 43.1921 91C44.7087 91 45.4963 90.0682 46.0708 89.3876C46.6105 88.7491 46.897 88.4421 47.5135 88.4421C48.13 88.4421 48.417 88.7491 48.9562 89.3876C49.5307 90.0682 50.3183 91 51.8354 91C53.3524 91 54.1395 90.0682 54.7145 89.3876C55.2537 88.7491 55.5402 88.4421 56.1567 88.4421C56.7742 88.4421 57.0607 88.7491 57.6004 89.3876C58.1754 90.0682 58.9625 91 60.4795 91C61.9966 91 62.7842 90.0682 63.3591 89.3876C63.8989 88.7491 64.1854 88.4421 64.8024 88.4421C65.4189 88.4421 65.7054 88.7491 66.2451 89.3876C66.8201 90.0682 67.6077 91 69.1247 91C70.6418 91 71.4289 90.0682 72.0038 89.3876C72.5436 88.7491 72.8306 88.4421 73.4475 88.4421C74.0645 88.4421 74.351 88.7491 74.8908 89.3876Z"
      fill={color}
    />
    <path
      d="M82.0937 59.269C80.5766 59.269 79.789 60.2008 79.2136 60.8809C78.6743 61.5199 78.3874 61.8269 77.7709 61.8269C77.1534 61.8269 76.8669 61.5199 76.3272 60.8809C75.7522 60.2008 74.9646 59.269 73.4475 59.269C71.93 59.269 71.1424 60.2008 70.5675 60.8814C70.0282 61.5199 69.7412 61.8269 69.1247 61.8269C68.5077 61.8269 68.2212 61.5199 67.6815 60.8809C67.1065 60.2008 66.3194 59.269 64.8024 59.269C63.2853 59.269 62.4977 60.2008 61.9228 60.8809C61.383 61.5199 61.0965 61.8269 60.4795 61.8269C59.8625 61.8269 59.5761 61.5199 59.0368 60.8809C58.4614 60.2008 57.6742 59.269 56.1567 59.269C54.6402 59.269 53.8525 60.2008 53.2781 60.8814C52.7383 61.5199 52.4519 61.8269 51.8354 61.8269C51.2189 61.8269 50.9319 61.5199 50.3926 60.8814C49.8177 60.2008 49.0306 59.269 47.5135 59.269C45.9965 59.269 45.2093 60.2008 44.6344 60.8814C44.0951 61.5199 43.8086 61.8269 43.1921 61.8269C42.5751 61.8269 42.2886 61.5199 41.7489 60.8809C41.1745 60.2008 40.3868 59.269 38.8698 59.269C37.3532 59.269 36.5656 60.2008 35.9912 60.8814C35.4514 61.5199 35.1649 61.8269 34.5484 61.8269C33.9319 61.8269 33.6454 61.5199 33.1062 60.8814C32.5317 60.2008 31.7441 59.269 30.2276 59.269C28.7105 59.269 27.9234 60.2008 27.3484 60.8814C26.8087 61.5199 26.5222 61.8269 25.9057 61.8269C25.2892 61.8269 25.0027 61.5199 24.463 60.8814C23.888 60.2008 23.1009 59.269 21.5839 59.269C20.0668 59.269 19.2797 60.2008 18.7047 60.8814C18.1655 61.5199 17.8785 61.8269 17.262 61.8269C16.6455 61.8269 16.359 61.5199 15.8193 60.8814C15.2443 60.2008 14.4572 59.269 12.9402 59.269C12.4209 59.269 12 59.6899 12 60.2091C12 60.7283 12.4209 61.1493 12.9402 61.1493C13.5567 61.1493 13.8436 61.4563 14.3829 62.0948C14.9578 62.7753 15.745 63.7072 17.262 63.7072C18.779 63.7072 19.5662 62.7753 20.1411 62.0948C20.6804 61.4563 20.9674 61.1493 21.5839 61.1493C22.2004 61.1493 22.4869 61.4563 23.0266 62.0948C23.6015 62.7753 24.3887 63.7072 25.9057 63.7072C27.4227 63.7072 28.2099 62.7753 28.7848 62.0948C29.3246 61.4563 29.6111 61.1493 30.2276 61.1493C30.8436 61.1493 31.1305 61.4563 31.6698 62.0948C32.2443 62.7753 33.0314 63.7072 34.5484 63.7072C36.0655 63.7072 36.8526 62.7753 37.4275 62.0948C37.9668 61.4563 38.2533 61.1493 38.8698 61.1493C39.4863 61.1493 39.7733 61.4563 40.3125 62.0948C40.8875 62.7753 41.6751 63.7072 43.1921 63.7072C44.7087 63.7072 45.4963 62.7753 46.0708 62.0948C46.6105 61.4563 46.897 61.1493 47.5135 61.1493C48.13 61.1493 48.4165 61.4563 48.9562 62.0948C49.5307 62.7753 50.3183 63.7072 51.8354 63.7072C53.3524 63.7072 54.1395 62.7753 54.7145 62.0948C55.2537 61.4563 55.5402 61.1493 56.1567 61.1493C56.7742 61.1493 57.0607 61.4563 57.6004 62.0948C58.1754 62.7753 58.9625 63.7072 60.4795 63.7072C61.9966 63.7072 62.7842 62.7753 63.3591 62.0948C63.8989 61.4563 64.1854 61.1493 64.8024 61.1493C65.4189 61.1493 65.7054 61.4563 66.2451 62.0948C66.8201 62.7753 67.6077 63.7072 69.1247 63.7072C70.6418 63.7072 71.4289 62.7753 72.0038 62.0948C72.5436 61.4563 72.8306 61.1493 73.4475 61.1493C74.0645 61.1493 74.351 61.4563 74.8908 62.0948C75.4657 62.7753 76.2533 63.7072 77.7709 63.7072C79.2879 63.7072 80.075 62.7753 80.65 62.0948C81.1897 61.4563 81.4767 61.1493 82.0937 61.1493C82.6129 61.1493 83.0338 60.7283 83.0338 60.2091C83.0338 59.6899 82.6129 59.269 82.0937 59.269Z"
      fill={color}
    />
    <path
      d="M79.2136 56.0502C78.6743 56.6887 78.3874 56.9957 77.7709 56.9957C77.1534 56.9957 76.8669 56.6887 76.3272 56.0497C75.7522 55.3696 74.9646 54.4378 73.4475 54.4378C72.9528 54.4378 72.5367 54.538 72.1788 54.6949L67.1075 47.4808V35.5439L80.6353 54.7864C80.0017 55.1198 79.5671 55.6322 79.2136 56.0502ZM69.1247 56.9957C68.5077 56.9957 68.2212 56.6887 67.6815 56.0497C67.1065 55.3696 66.3194 54.4378 64.8024 54.4378C63.2853 54.4378 62.4977 55.3696 61.9228 56.0502C61.383 56.6887 61.0965 56.9957 60.4795 56.9957C59.8625 56.9957 59.5761 56.6887 59.0368 56.0502C58.4614 55.3696 57.6742 54.4378 56.1567 54.4378C54.6402 54.4378 53.8525 55.3696 53.2781 56.0502C52.7383 56.6887 52.4519 56.9957 51.8354 56.9957C51.2189 56.9957 50.9319 56.6887 50.3926 56.0502C49.9609 55.5388 49.4085 54.8856 48.5177 54.5928V49.5757H66.2813L70.7131 55.8795C70.6633 55.9377 70.6144 55.9949 70.5675 56.0502C70.0282 56.6887 69.7412 56.9957 69.1247 56.9957ZM44.6344 56.0502C44.0951 56.6887 43.8086 56.9957 43.1921 56.9957C42.5751 56.9957 42.2886 56.6887 41.7489 56.0502C41.1745 55.3696 40.3868 54.4378 38.8698 54.4378C37.3532 54.4378 36.5656 55.3696 35.9912 56.0502C35.4514 56.6887 35.1649 56.9957 34.5484 56.9957C33.9319 56.9957 33.6454 56.6887 33.1062 56.0502C32.5317 55.3696 31.7441 54.4378 30.2276 54.4378C28.7105 54.4378 27.9234 55.3696 27.3484 56.0502C26.8087 56.6887 26.5222 56.9957 25.9057 56.9957C25.2892 56.9957 25.0027 56.6887 24.463 56.0502C24.417 55.9954 24.3686 55.9387 24.3192 55.8815L29.6467 48.3041L46.6369 24.1364V54.5561C45.6713 54.8269 45.0861 55.5153 44.6344 56.0502ZM18.7047 56.0502C18.1655 56.6887 17.8785 56.9957 17.262 56.9957C16.6455 56.9957 16.359 56.6887 15.8193 56.0502C15.4663 55.6322 15.0321 55.1198 14.3985 54.7864L27.9268 35.5439V47.4808L22.854 54.6959C22.4961 54.5385 22.0796 54.4378 21.5839 54.4378C20.0668 54.4378 19.2797 55.3696 18.7047 56.0502ZM27.9268 6.8803V32.2741L13.8803 52.2544V6.8803H27.9268ZM61.9555 40.1532L65.2267 35.5292V44.806L61.9555 40.1532ZM48.5177 40.622H59.9867L64.9593 47.6949H48.5177V40.622ZM48.5177 31.8928H53.7328L53.8418 31.8815L58.6648 38.7417H48.5177V31.8928ZM52.5276 30.012H48.5177V24.3085L52.5276 30.012ZM34.2253 38.5212L29.8071 32.2726V6.8803H65.2267V32.2726L60.8076 38.5203L48.286 20.7092C48.11 20.4589 47.823 20.3098 47.5169 20.3098C47.2109 20.3098 46.9239 20.4589 46.7479 20.7092L34.2253 38.5212ZM29.8071 35.5302L33.0768 40.1551L29.8071 44.8055V35.5302ZM81.1012 52.1796L67.1075 32.2741V6.8803H81.1526L81.1012 52.1796ZM82.7591 5.27574C82.5826 5.09875 82.3435 5 82.0937 5H12.9402C12.4209 5 12 5.42094 12 5.94014V55.1956L12.0088 55.287L12 55.3779C12 55.8971 12.4209 56.3181 12.9402 56.3181C13.5567 56.3181 13.8436 56.6251 14.3829 57.2636C14.9578 57.9442 15.745 58.876 17.262 58.876C18.779 58.876 19.5662 57.9442 20.1411 57.2636C20.6804 56.6251 20.9674 56.3181 21.5839 56.3181C22.2004 56.3181 22.4869 56.6251 23.0266 57.2636C23.6015 57.9442 24.3887 58.876 25.9057 58.876C27.4227 58.876 28.2099 57.9442 28.7848 57.2636C29.3246 56.6251 29.6111 56.3181 30.2276 56.3181C30.8436 56.3181 31.1305 56.6251 31.6698 57.2636C32.2443 57.9442 33.0314 58.876 34.5484 58.876C36.0655 58.876 36.8526 57.9442 37.4275 57.2636C37.9668 56.6251 38.2533 56.3181 38.8698 56.3181C39.4863 56.3181 39.7733 56.6251 40.3125 57.2636C40.8875 57.9442 41.6751 58.876 43.1921 58.876C44.7087 58.876 45.4963 57.9442 46.0708 57.2636C46.6105 56.6251 46.897 56.3181 47.5135 56.3181C48.13 56.3181 48.4165 56.6251 48.9562 57.2636C49.5307 57.9442 50.3183 58.876 51.8354 58.876C53.3524 58.876 54.1395 57.9442 54.7145 57.2636C55.2537 56.6251 55.5402 56.3181 56.1567 56.3181C56.7742 56.3181 57.0607 56.6251 57.6004 57.2636C58.1754 57.9442 58.9625 58.876 60.4795 58.876C61.9966 58.876 62.7842 57.9442 63.3591 57.2636C63.8989 56.6251 64.1854 56.3181 64.8024 56.3181C65.4189 56.3181 65.7054 56.6251 66.2451 57.2636C66.8201 57.9442 67.6077 58.876 69.1247 58.876C70.6418 58.876 71.4289 57.9442 72.0038 57.2636C72.5436 56.6251 72.8306 56.3181 73.4475 56.3181C74.0645 56.3181 74.351 56.6251 74.8908 57.2636C75.4657 57.9442 76.2533 58.876 77.7709 58.876C79.2879 58.876 80.075 57.9442 80.65 57.2636C81.1897 56.6251 81.4767 56.3181 82.0937 56.3181C82.6129 56.3181 83.0338 55.8971 83.0338 55.3779C83.0338 55.2699 83.0118 55.1677 82.9786 55.0714L83.0338 5.94112C83.0343 5.69178 82.9356 5.45223 82.7591 5.27574Z"
      fill={color}
    />
    <path
      d="M17.5492 73.777C17.7476 74.4392 18.685 74.44 18.8845 73.7782L21.1358 66.3079C21.2245 66.0134 21.4957 65.8119 21.8032 65.8119H23.4118C23.8916 65.8119 24.2279 66.2852 24.0702 66.7383L19.8386 78.8905C19.741 79.1706 19.4769 79.3583 19.1803 79.3583H17.2596C16.9627 79.3583 16.6983 79.1702 16.601 78.8897L12.3861 66.7374C12.229 66.2845 12.5654 65.8119 13.0448 65.8119H14.6444C14.9524 65.8119 15.2238 66.014 15.3122 66.309L17.5492 73.777Z"
      fill={color}
    />
    <path
      d="M36.6738 72.8921C36.6738 74.2257 36.4382 75.3949 35.9668 76.3997C35.4954 77.4045 34.8193 78.1798 33.9385 78.7257C33.0639 79.2715 32.0591 79.5444 30.9241 79.5444C29.8014 79.5444 28.7997 79.2746 27.9189 78.735C27.0381 78.1953 26.3559 77.4262 25.8721 76.4276C25.3883 75.4228 25.1433 74.2691 25.1371 72.9666V72.2967C25.1371 70.9631 25.3759 69.7909 25.8534 68.7798C26.3373 67.7626 27.0164 66.9842 27.891 66.4446C28.7718 65.8987 29.7766 65.6258 30.9054 65.6258C32.0343 65.6258 33.036 65.8987 33.9106 66.4446C34.7914 66.9842 35.4705 67.7626 35.9481 68.7798C36.4319 69.7909 36.6738 70.96 36.6738 72.2874V72.8921ZM33.8455 72.2781C33.8455 70.8577 33.5912 69.7785 33.0826 69.0403C32.5739 68.3022 31.8482 67.9332 30.9054 67.9332C29.9689 67.9332 29.2463 68.2991 28.7376 69.031C28.229 69.7567 27.9716 70.8236 27.9654 72.2316V72.8921C27.9654 74.2753 28.2197 75.3484 28.7283 76.1113C29.237 76.8742 29.9689 77.2557 30.9241 77.2557C31.8606 77.2557 32.5801 76.8897 33.0826 76.1578C33.585 75.4197 33.8393 74.3466 33.8455 72.9387V72.2781Z"
      fill={color}
    />
    <path
      d="M42.3318 70.5389C42.58 71.0801 43.3486 71.081 43.5982 70.5405L45.5954 66.2167C45.7094 65.9699 45.9564 65.8119 46.2282 65.8119H47.6908C48.2127 65.8119 48.5495 66.3643 48.3105 66.8282L44.4641 74.2957C44.4133 74.3944 44.3868 74.5038 44.3868 74.6149V78.6612C44.3868 79.0462 44.0746 79.3583 43.6896 79.3583H42.2462C41.8612 79.3583 41.5491 79.0462 41.5491 78.6612V74.6149C41.5491 74.5038 41.5225 74.3944 41.4717 74.2957L37.6253 66.8282C37.3863 66.3643 37.7232 65.8119 38.245 65.8119H39.7157C39.9881 65.8119 40.2356 65.9706 40.3493 66.2183L42.3318 70.5389Z"
      fill={color}
    />
    <path
      d="M56.4834 77.0419C56.3879 76.7582 56.122 76.5672 55.8228 76.5672H51.9322C51.6322 76.5672 51.3658 76.7592 51.2709 77.0438L50.6583 78.8817C50.5634 79.1663 50.297 79.3583 49.9969 79.3583H48.5348C48.0488 79.3583 47.7119 78.8735 47.8815 78.418L52.4052 66.2658C52.5068 65.9929 52.7673 65.8119 53.0585 65.8119H54.6772C54.968 65.8119 55.2282 65.9923 55.3301 66.2646L59.8788 78.4168C60.0494 78.8725 59.7125 79.3583 59.226 79.3583H57.7642C57.4649 79.3583 57.199 79.1673 57.1035 78.8836L56.4834 77.0419ZM52.4879 73.3895C52.338 73.8408 52.674 74.3063 53.1495 74.3063H54.6006C55.077 74.3063 55.4131 73.839 55.2614 73.3873L54.5319 71.2146C54.3188 70.5799 53.4205 70.5814 53.2095 71.2168L52.4879 73.3895Z"
      fill={color}
    />
    <path
      d="M72.0099 77.3936C72.0099 77.557 71.9543 77.7167 71.8416 77.8349C71.3532 78.3467 70.6991 78.7522 69.8794 79.0513C68.9614 79.38 67.9441 79.5444 66.8277 79.5444C65.6554 79.5444 64.6258 79.2901 63.7388 78.7815C62.858 78.2667 62.1758 77.5224 61.6919 76.5486C61.2144 75.5748 60.9693 74.4304 60.9569 73.1154V72.1944C60.9569 70.8422 61.1833 69.673 61.6361 68.6868C62.0951 67.6944 62.7526 66.9377 63.6085 66.4167C64.4707 65.8894 65.4786 65.6258 66.6323 65.6258C68.2388 65.6258 69.4948 66.0104 70.4004 66.7795C71.1398 67.4024 71.6332 68.259 71.8805 69.3493C71.9726 69.7553 71.6449 70.1196 71.2285 70.1196H69.8876C69.5452 70.1196 69.2619 69.8677 69.1606 69.5405C69.0101 69.0547 68.7783 68.6802 68.4652 68.417C68.0434 68.0572 67.4603 67.8774 66.716 67.8774C65.767 67.8774 65.0444 68.234 64.5482 68.9473C64.052 69.6606 63.8008 70.7212 63.7946 72.1292V72.9945C63.7946 74.4149 64.0644 75.4879 64.6041 76.2136C65.1437 76.9393 65.9345 77.3022 66.9765 77.3022C67.8679 77.3022 68.5417 77.1407 68.998 76.8178C69.1489 76.711 69.2188 76.5284 69.2188 76.3435V74.9941C69.2188 74.6091 68.9067 74.297 68.5217 74.297H67.3759C66.9909 74.297 66.6788 73.9849 66.6788 73.5999V72.938C66.6788 72.553 66.9909 72.2409 67.3759 72.2409H71.3128C71.6978 72.2409 72.0099 72.553 72.0099 72.938V77.3936Z"
      fill={color}
    />
    <path
      d="M82.4303 72.7905C82.4303 73.1755 82.1182 73.4876 81.7332 73.4876H77.7684C77.3834 73.4876 77.0712 73.7997 77.0712 74.1847V76.419C77.0712 76.804 77.3834 77.1161 77.7684 77.1161H82.6635C83.0486 77.1161 83.3607 77.4282 83.3607 77.8132V78.6612C83.3607 79.0462 83.0486 79.3583 82.6635 79.3583H74.9772C74.5922 79.3583 74.2801 79.0462 74.2801 78.6612V66.509C74.2801 66.124 74.5922 65.8119 74.9772 65.8119H82.6449C83.0299 65.8119 83.3421 66.124 83.3421 66.509V67.3756C83.3421 67.7606 83.0299 68.0727 82.6449 68.0727H77.7684C77.3834 68.0727 77.0712 68.3848 77.0712 68.7699V70.6041C77.0712 70.9891 77.3834 71.3012 77.7684 71.3012H81.7332C82.1182 71.3012 82.4303 71.6133 82.4303 71.9983V72.7905Z"
      fill={color}
    />
  </svg>
)

export default Logo
