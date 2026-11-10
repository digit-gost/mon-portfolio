
export default function Avatar() {
  return (
    <svg
      viewBox="0 0 420 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Avatar 3D personnalisé"
      className="block w-full max-h-[73vh] overflow-visible"
    >
      <defs>
        {/* Skin */}
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a9684e" />
          <stop offset="45%" stopColor="#75422f" />
          <stop offset="100%" stopColor="#48291f" />
        </linearGradient>

        <linearGradient id="skinLight" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#c48768" />
          <stop offset="100%" stopColor="#75432f" />
        </linearGradient>

        {/* Hair */}
        <linearGradient id="hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34302d" />
          <stop offset="50%" stopColor="#151313" />
          <stop offset="100%" stopColor="#08090b" />
        </linearGradient>

        {/* Beard */}
        <linearGradient id="beard" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#30221d" />
          <stop offset="50%" stopColor="#171211" />
          <stop offset="100%" stopColor="#080809" />
        </linearGradient>

        {/* Headphones */}
        <linearGradient id="headphone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#08090c" />
          <stop offset="50%" stopColor="#42434a" />
          <stop offset="100%" stopColor="#08090c" />
        </linearGradient>

        {/* Clothes */}
        <linearGradient id="hoodie" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#777982" />
          <stop offset="50%" stopColor="#343944" />
          <stop offset="100%" stopColor="#171b25" />
        </linearGradient>

        {/* Glasses */}
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".22" />
          <stop offset="100%" stopColor="#b9d8e5" stopOpacity=".04" />
        </linearGradient>

        <radialGradient id="faceLight">
          <stop offset="0%" stopColor="#d99b77" stopOpacity=".4" />
          <stop offset="100%" stopColor="#d99b77" stopOpacity="0" />
        </radialGradient>

        <filter id="shadow">
          <feGaussianBlur stdDeviation="8" />
        </filter>

        <filter id="soft">
          <feGaussianBlur stdDeviation="3" />
        </filter>

        <clipPath id="faceClip">
          <path d="
            M104 179
            Q105 105 210 91
            Q315 105 316 179
            L307 269
            Q300 344 210 366
            Q120 344 113 269Z
          " />
        </clipPath>
      </defs>

      {/* Background glow */}
      <ellipse
        cx="210"
        cy="290"
        rx="185"
        ry="220"
        fill="#8b36a8"
        opacity=".09"
        filter="url(#shadow)"
      />

      {/* Ground shadow */}
      <ellipse
        cx="210"
        cy="536"
        rx="130"
        ry="14"
        fill="#000"
        opacity=".3"
        filter="url(#shadow)"
      />

      {/* Body */}
      <g className="origin-bottom transition-transform duration-500 hover:translate-y-1">

        {/* Hoodie */}
        <path
          d="
            M70 560
            Q76 443 142 414
            L176 394
            L210 438
            L244 394
            L278 414
            Q344 443 350 560Z
          "
          fill="url(#hoodie)"
          stroke="#252a34"
          strokeWidth="2"
        />

        {/* Shoulder highlights */}
        <path
          d="M79 506 Q100 440 153 426"
          fill="none"
          stroke="#9a9da6"
          strokeWidth="3"
          opacity=".25"
        />

        <path
          d="M341 506 Q320 440 267 426"
          fill="none"
          stroke="#9a9da6"
          strokeWidth="3"
          opacity=".2"
        />

        {/* Hood */}
        <path
          d="
            M143 405
            Q119 388 143 371
            L176 382
            L210 431
            L244 382
            L277 371
            Q301 388 277 405
            L244 460
            L210 438
            L176 460Z
          "
          fill="#747781"
          stroke="#3a3e47"
          strokeWidth="3"
        />

        {/* Neck */}
        <path
          d="M174 330 L174 416 Q210 448 246 416 L246 330Z"
          fill="url(#skin)"
        />

        {/* Neck shadow */}
        <path
          d="M174 355 Q210 399 246 355 L246 405 Q210 431 174 405Z"
          fill="#42251e"
          opacity=".35"
        />

        {/* Hoodie strings */}
        <path d="M177 426 L183 512" stroke="#c4c4c4" strokeWidth="2.5" />
        <path d="M243 426 L237 512" stroke="#c4c4c4" strokeWidth="2.5" />
        <circle cx="183" cy="513" r="3.5" fill="#bfc0c4" />
        <circle cx="237" cy="513" r="3.5" fill="#bfc0c4" />
      </g>

      {/* Headphone arch */}
      <g>
        <path
          d="M74 214 C49 -12 371 -12 346 214"
          fill="none"
          stroke="#090a0d"
          strokeWidth="25"
          strokeLinecap="round"
        />

        <path
          d="M74 214 C49 -12 371 -12 346 214"
          fill="none"
          stroke="#62636a"
          strokeWidth="5"
          strokeLinecap="round"
          opacity=".7"
        />

        <path
          d="M83 180 C72 24 348 24 337 180"
          fill="none"
          stroke="#292a30"
          strokeWidth="4"
        />

        {/* Left ear cup */}
        <rect
          x="43" y="177" width="52" height="126"
          rx="21"
          fill="url(#headphone)"
          stroke="#77777e"
          strokeWidth="3"
        />

        <rect
          x="50" y="191" width="38" height="99"
          rx="15"
          fill="#16171c"
        />

        {/* Right ear cup */}
        <rect
          x="325" y="177" width="52" height="126"
          rx="21"
          fill="url(#headphone)"
          stroke="#77777e"
          strokeWidth="3"
        />

        <rect
          x="332" y="191" width="38" height="99"
          rx="15"
          fill="#16171c"
        />

        <path d="M56 199 L56 278" stroke="#777982" strokeWidth="2" opacity=".5" />
        <path d="M364 199 L364 278" stroke="#777982" strokeWidth="2" opacity=".5" />

        <circle cx="69" cy="240" r="3" fill="#92949c" />
        <circle cx="351" cy="240" r="3" fill="#92949c" />
      </g>

      {/* Ears */}
      <path
        d="M112 220 Q75 190 81 250 Q85 283 119 280Z"
        fill="url(#skinLight)"
      />

      <path
        d="M308 220 Q345 190 339 250 Q335 283 301 280Z"
        fill="url(#skinLight)"
      />

      {/* Face */}
      <g className="origin-center animate-[avatar-nod_7s_ease-in-out_infinite]">

        <path
          d="
            M104 179
            Q105 105 210 91
            Q315 105 316 179
            L307 269
            Q300 344 210 366
            Q120 344 113 269Z
          "
          fill="url(#skin)"
        />

        {/* Face lighting */}
        <g clipPath="url(#faceClip)">
          <ellipse
            cx="167" cy="220" rx="90" ry="130"
            fill="url(#faceLight)"
          />

          <ellipse
            cx="290" cy="250" rx="42" ry="110"
            fill="#28140f"
            opacity=".17"
            filter="url(#soft)"
          />

          <ellipse
            cx="126" cy="275" rx="34" ry="25"
            fill="#dc9474"
            opacity=".18"
            filter="url(#soft)"
          />

          <ellipse
            cx="294" cy="275" rx="34" ry="25"
            fill="#dc9474"
            opacity=".18"
            filter="url(#soft)"
          />

          {/* Skin texture */}
          {Array.from({ length: 32 }, (_, i) => (
            <circle
              key={i}
              cx={125 + ((i * 37) % 170)}
              cy={175 + ((i * 23) % 145)}
              r={i % 3 === 0 ? 1.1 : 0.6}
              fill="#f0b092"
              opacity=".22"
            />
          ))}
        </g>

        {/* Forehead */}
        <path
          d="M141 158 Q210 130 279 158"
          fill="none"
          stroke="#d69b79"
          strokeWidth="3"
          opacity=".18"
        />

        {/* Eyebrows */}
        <path
          d="M127 202 Q153 181 188 198 Q171 210 130 211Z"
          fill="#181211"
        />

        <path
          d="M232 198 Q267 181 293 202 L290 211 Q249 210 232 198Z"
          fill="#181211"
        />

        {/* Eyes */}
        <g className="origin-center animate-[avatar-blink_6s_ease-in-out_infinite]">

          <path
            d="M130 236 Q157 216 189 236 Q160 254 130 236Z"
            fill="#f1d6c6"
          />

          <path
            d="M231 236 Q263 216 290 236 Q260 254 231 236Z"
            fill="#f1d6c6"
          />

          <ellipse cx="161" cy="235" rx="10" ry="13" fill="#30231e" />
          <ellipse cx="260" cy="235" rx="10" ry="13" fill="#30231e" />

          <circle cx="161" cy="235" r="5.5" fill="#080808" />
          <circle cx="260" cy="235" r="5.5" fill="#080808" />

          <circle cx="165" cy="230" r="3" fill="#fff" />
          <circle cx="264" cy="230" r="3" fill="#fff" />

          <path
            d="M130 236 Q157 216 189 236"
            fill="none"
            stroke="#251714"
            strokeWidth="3"
          />

          <path
            d="M231 236 Q263 216 290 236"
            fill="none"
            stroke="#251714"
            strokeWidth="3"
          />
        </g>

        {/* Nose */}
        <path
          d="M207 237 Q202 267 188 291 Q199 301 221 292"
          fill="none"
          stroke="#4c2a20"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity=".8"
        />

        <path
          d="M190 294 Q208 305 225 293"
          fill="none"
          stroke="#3d211b"
          strokeWidth="3"
        />

        <ellipse
          cx="191" cy="292" rx="9" ry="4"
          fill="#d69a7b"
          opacity=".35"
        />

        {/* Beard - short jawline beard */}
        <path
          d="
            M116 277
            Q106 281 114 312
            Q126 347 159 357
            Q182 370 210 371
            Q238 370 261 357
            Q294 347 306 312
            Q314 281 304 277
            Q299 307 275 318
            Q256 337 210 340
            Q164 337 145 318
            Q121 307 116 277Z
          "
          fill="url(#beard)"
        />

        {/* Beard contour */}
        <path
          d="M119 294 Q131 340 171 350"
          fill="none"
          stroke="#594037"
          strokeWidth="3"
          opacity=".5"
        />

        <path
          d="M301 294 Q289 340 249 350"
          fill="none"
          stroke="#594037"
          strokeWidth="3"
          opacity=".5"
        />

        {/* Chin */}
        <path
          d="M164 347 Q210 373 256 347 Q247 381 210 384 Q173 381 164 347Z"
          fill="#171211"
          opacity=".8"
        />

        {/* Mustache */}
        <path
          d="
            M177 306
            Q192 292 210 306
            Q228 292 243 306
            Q235 321 210 316
            Q185 321 177 306Z
          "
          fill="#171211"
        />

        {/* Mouth */}
        <path
          d="M190 328 Q210 338 230 328"
          fill="none"
          stroke="#d68e78"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M194 333 Q210 340 226 333"
          fill="none"
          stroke="#4b2925"
          strokeWidth="1.5"
        />

      </g>

      {/* Hair */}
      <g>
        <path
          d="
            M102 192
            Q80 119 116 76
            Q148 39 210 46
            Q276 39 306 78
            Q341 122 318 193
            L306 205
            Q306 137 281 113
            Q248 133 211 122
            Q163 143 128 115
            Q109 146 114 205Z
          "
          fill="url(#hair)"
        />

        {/* Hair texture */}
        <g fill="none" strokeLinecap="round">
          <path d="M117 113 Q146 56 194 54" stroke="#5c514a" strokeWidth="3" opacity=".5" />
          <path d="M143 111 Q175 47 226 55" stroke="#77655b" strokeWidth="3" opacity=".4" />
          <path d="M174 117 Q207 58 260 73" stroke="#5e5149" strokeWidth="4" opacity=".5" />
          <path d="M207 115 Q242 73 285 96" stroke="#76665c" strokeWidth="3" opacity=".45" />
          <path d="M237 117 Q267 91 297 122" stroke="#54473f" strokeWidth="3" opacity=".5" />
        </g>
      </g>

      {/* Glasses */}
      <g>
        {/* Left frame */}
        <path
          d="
            M112 218
            Q148 207 190 220
            L190 259
            Q188 283 165 287
            L140 285
            Q116 281 113 255Z
          "
          fill="url(#glass)"
          stroke="#101115"
          strokeWidth="7"
        />

        {/* Right frame */}
        <path
          d="
            M230 220
            Q272 207 308 218
            L307 255
            Q304 281 280 285
            L255 287
            Q232 283 230 259Z
          "
          fill="url(#glass)"
          stroke="#101115"
          strokeWidth="7"
        />

        {/* Frame reflections */}
        <path
          d="M122 226 Q148 217 176 224"
          stroke="#a9bac3"
          strokeWidth="2"
          fill="none"
          opacity=".65"
        />

        <path
          d="M242 224 Q270 217 296 226"
          stroke="#a9bac3"
          strokeWidth="2"
          fill="none"
          opacity=".65"
        />

        {/* Bridge */}
        <path
          d="M190 226 Q210 213 230 226"
          fill="none"
          stroke="#101115"
          strokeWidth="7"
        />

        {/* Temples */}
        <path d="M112 225 L82 215" stroke="#101115" strokeWidth="7" />
        <path d="M308 225 L338 215" stroke="#101115" strokeWidth="7" />
      </g>

      {/* Ambient highlights */}
      <path
        d="M64 350 Q30 210 78 112"
        stroke="#b58aff"
        strokeWidth="2"
        fill="none"
        opacity=".15"
      />

      <path
        d="M356 350 Q390 210 342 112"
        stroke="#64dfff"
        strokeWidth="2"
        fill="none"
        opacity=".12"
      />

    </svg>
  );
}
