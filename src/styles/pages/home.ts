import { styled } from "..";

function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 20 + `rem `), "")
    .trim();
}

export const FormCotainer = styled('form', {
 minHeight: '100vh',
 padding: '0 0.5rem',
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'center',
 alignItems: 'center',
 height: '100vh',
//  background: '$gray800',
})

export const FormCotainer2 = styled('div', {
  display: "flex",
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: pixelToRem(24),
  gap: pixelToRem(16),

  width: pixelToRem(540),
  height: pixelToRem(278),

  position: 'reltive',
  background: '$gray800',

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    gap: '0.5rem',
  }
})


export const IpuntCotainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',

  width: pixelToRem(492),
  height: pixelToRem(76),

  position: 'relative',

  label: {
    width: pixelToRem(107),
    height: pixelToRem(22),

    fontSize: pixelToRem(14),
    lineHeight: '160%',
    color: '$gray100',
  },

  input: {
    isplay: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',

    width: pixelToRem(492),
    height: pixelToRem(46),

    backgroundColor: '$gray800',
    borderRadius: '6px'
  }
})