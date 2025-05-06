/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			darkBlue: '#112661',
    			deepBlack: '#040404',
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			bounce: {
    				'0%, 100%': {
    					transform: 'translateY(0)'
    				},
    				'50%': {
    					transform: 'translateY(-10px)'
    				}
    			},
    			rotate: {
    				'90': '90deg'
    			},
    			float: {
    				'0%': {
    					transform: 'translateY(0px) rotate(0deg)'
    				},
    				'50%': {
    					transform: 'translateY(-20px) rotate(5deg)'
    				},
    				'100%': {
    					transform: 'translateY(0px) rotate(0deg)'
    				}
    			},
    			'gradient-shift': {
    				'0%, 100%': {
    					'background-position': '0% 50%'
    				},
    				'50%': {
    					'background-position': '100% 50%'
    				}
    			},
    			'gradient-pulse': {
    				'0%, 100%': {
    					opacity: 1
    				},
    				'50%': {
    					opacity: 0.9
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			bounce: 'bounce 2s infinite',
    			float: 'float 6s ease-in-out infinite',
    			'gradient-shift': 'gradient-shift 8s ease infinite',
    			'gradient-pulse': 'gradient-pulse 6s ease infinite'
    		},
    		fontSize: {
    			sm: '0.8rem',
    			base: '1rem',
    			xl: '1.25rem',
    			'2xl': '1.563rem',
    			'3xl': '1.953rem',
    			'4xl': '2.441rem',
    			'5xl': '3.052rem'
    		},
    		fontFamily: {
    			volkhov: [
    				'Volkhov'
    			],
    			poppins: [
    				'Poppins'
    			],
    			inter: [
    				'Inter'
    			],
    			body: [
    				'Inter',
    				'ui-sans-serif',
    				'system-ui',
    				'-apple-system',
    				'system-ui',
    				'Segoe UI',
    				'Roboto',
    				'Helvetica Neue',
    				'Arial',
    				'Noto Sans',
    				'sans-serif',
    				'Apple Color Emoji',
    				'Segoe UI Emoji',
    				'Segoe UI Symbol',
    				'Noto Color Emoji'
    			],
    			sans: [
    				'Inter',
    				'ui-sans-serif',
    				'system-ui',
    				'-apple-system',
    				'system-ui',
    				'Segoe UI',
    				'Roboto',
    				'Helvetica Neue',
    				'Arial',
    				'Noto Sans',
    				'sans-serif',
    				'Apple Color Emoji',
    				'Segoe UI Emoji',
    				'Segoe UI Symbol',
    				'Noto Color Emoji'
    			]
    		},
    		textShadow: {
    			DEFAULT: '0 0 20px rgba(160, 196, 255, 0.3)'
    		},
    		backgroundImage: {
    			'grid-white': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
    			'noise-texture': 'url(/noise.svg)',
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		boxShadow: {
    			glow: '0 0 15px rgba(23, 107, 239, 0.5)',
    			'glow-lg': '0 0 30px rgba(23, 107, 239, 0.7)'
    		}
    	}
    },
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }) {
			const newUtilities = {
				'.text-shadow': {
					textShadow: '0 0 20px rgba(160, 196, 255, 0.3)',
				},
				'.text-shadow-none': {
					textShadow: 'none',
				},
			}
			addUtilities(newUtilities)
		}
	],
}