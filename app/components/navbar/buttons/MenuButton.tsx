'use client';

import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';
import NavMenu from '@components/navbar/NavMenu';
import {useState} from 'react';

export default function MenuButton() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <div
        className={css({
          height: {
            base: 10,
            md: 14,
          },
          width: {
            base: 10,
            md: 14,
          },
          position: 'relative',
          borderRadius: 10,
          bgGradient: 'to-tr',
          gradientFrom: {
            base: 'p_purple.800',
            _dark: 'p_purple.200',
          },
          gradientTo: {
            base: 'p_blue.800',
            _dark: 'p_blue.200',
          },
          transition: 'all 0.5s',
          display: {
            xl: 'none',
          },
        })}
        onClick={() => {
          return setIsActive(!isActive);
        }}
      >
        <div
          className={circle({
            size: {
              base: '22px',
              md: 8,
            },
            bgColor: 'p_purple.main',
            position: 'absolute',
            bottom: 1,
            left: 1,
          })}
        ></div>
        <div
          className={circle({
            size: {
              base: '22px',
              md: 8,
            },
            bgColor: 'p_blue.main',
            position: 'absolute',
            top: 1,
            right: 1,
          })}
        ></div>
        <div
          className={css({
            bgColor: {
              base: 'p_purple.light/70',
              _dark: 'p_purple.dark/70',
            },
            position: 'absolute',
            top: {
              base: '6px',
              md: '8px',
            },
            right: {
              base: '6px',
              md: '8px',
            },
            height: {
              base: 7,
              md: 10,
            },
            width: {
              base: 7,
              md: 10,
            },
            borderRadius: 7,
            borderColor: {
              base: 'p_blue.light/50',
              _dark: 'p_blue.dark/50',
            },
            border: '2px solid',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: {
              base: 1,
              md: '6px',
            },
            transition: 'background-color 0.5s',
          })}
        >
          <div
            className={css({
              width: '70%',
              height: '3px',
              bgColor: {
                base: 'p_purple.dark',
                _dark: 'p_purple.light',
              },
              borderRadius: 20,
              transition: 'background-color 0.5s',
            })}
          ></div>
          <div
            className={css({
              width: '70%',
              height: '3px',
              bgColor: {
                base: 'p_purple.dark',
                _dark: 'p_purple.light',
              },
              borderRadius: 20,
              transition: 'background-color 0.5s',
            })}
          ></div>
          <div
            className={css({
              width: '70%',
              height: '3px',
              bgColor: {
                base: 'p_purple.dark',
                _dark: 'p_purple.light',
              },
              borderRadius: 20,
              transition: 'background-color 0.5s',
            })}
          ></div>
        </div>
      </div>
      <div
        className={css({
          translateX: isActive ? '0' : '-110%',
          translate: 'auto',
          transition: 'all 0.5s',
          position: 'absolute',
          top: {
            base: '6.5vh',
            md: '7vh',
          },
          left: 0,
          width: 'fit-content',
          height: 'fit-content',
          display: {
            xl: 'none',
          },
        })}
      >
        <NavMenu />
      </div>
    </>
  );
}
